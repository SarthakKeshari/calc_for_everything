import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import jsPDF from "jspdf";

function MainQuestionPaperBuilder() {
  const [title, setTitle] = useState("");
  const [centerSection, setCenterSection] = useState(false);
  const [sections, setSections] = useState([
    {
      heading: "",
      subheading: "",
      questions: [],
    },
  ]);

  const addSection = () => {
    setSections([...sections, { heading: "", subheading: "", questions: [] }]);
  };

  const addQuestion = (sectionIndex) => {
    const updatedSections = [...sections];
    updatedSections[sectionIndex].questions.push({
      type: "MCQ",
      question: "",
      options: ["", "", "", ""], // Four options
      correctAnswers: [], // Array to store correct answer indices
      answers: [], // Array to store text-based answers
    });
    setSections(updatedSections);
  };

  const handleSectionChange = (index, field, value) => {
    const updatedSections = [...sections];
    updatedSections[index][field] = value;
    setSections(updatedSections);
  };

  const handleQuestionChange = (sectionIndex, questionIndex, field, value) => {
    const updatedSections = [...sections];
    updatedSections[sectionIndex].questions[questionIndex][field] = value;
    setSections(updatedSections);
  };

  const handleCorrectAnswerChange = (
    sectionIndex,
    questionIndex,
    optionIndex
  ) => {
    const updatedSections = [...sections];
    const question = updatedSections[sectionIndex].questions[questionIndex];
    const correctIndex = question.correctAnswers.indexOf(optionIndex);

    if (correctIndex === -1) {
      question.correctAnswers.push(optionIndex);
    } else {
      question.correctAnswers.splice(correctIndex, 1);
    }

    setSections(updatedSections);
  };

  const removeSection = (index) => {
    const updatedSections = [...sections];
    updatedSections.splice(index, 1);
    setSections(updatedSections);
  };

  const removeQuestion = (sectionIndex, questionIndex) => {
    const updatedSections = [...sections];
    updatedSections[sectionIndex].questions.splice(questionIndex, 1);
    setSections(updatedSections);
  };

  // ... (previous code)

  const downloadExamForm = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text(title, 100, 20, { align: "center" }); // Centered title

    let yPosition = 40; // Initialize y position for sections

    sections.forEach((section, sectionIndex) => {
      if (centerSection) {
        doc.text(section.heading, 100, yPosition, { align: "center" });
        yPosition += 10; // Add vertical space
        doc.text(section.subheading, 100, yPosition, { align: "center" });
        yPosition += 10; // Add more vertical space
      } else {
        doc.setFontSize(14);
        doc.text(section.heading, 10, yPosition);
        yPosition += 10; // Add vertical space
        doc.setFontSize(12);
        doc.text(section.subheading, 10, yPosition);
        yPosition += 10; // Add more vertical space
      }

      section.questions.forEach((question, questionIndex) => {
        const textLines = doc.splitTextToSize(
          `Q${questionIndex + 1}: ${question.question}`,
          180
        );
        textLines.forEach((line) => {
          doc.setFontSize(12);
          doc.text(line, 20, yPosition);
          yPosition += 10; // Add vertical space for each line
        });

        if (question.type === "MCQ") {
          question.options.forEach((option, optionIndex) => {
            const x = 20;
            doc.rect(x, yPosition, 5, 5); // Checkbox
            doc.text(option, x + 10, yPosition + 4); // Option text

            // Check and mark checkboxes for correct answers
            if (question.correctAnswers.includes(optionIndex)) {
              doc.setFillColor(0, 0, 0);
              doc.rect(x + 1, yPosition + 1, 3, 3, "F"); // Checked box
            }

            yPosition += 10; // Add vertical space
          });
        } else {
          // Text-based question
          doc.setDrawColor(0); // Reset draw color
          doc.setLineWidth(0.5); // Set line width for underline
          const x = 20;
          doc.line(x, yPosition, x + 180, yPosition); // Underline
          yPosition += 10; // Add vertical space

          if (question.answers.length > 0) {
            const answerText = `Answer: ${question.answers.join(", ")}`;
            const answerLines = doc.splitTextToSize(answerText, 180);
            answerLines.forEach((line) => {
              doc.text(line, 20, yPosition);
              yPosition += 10; // Add vertical space for each line
            });
          }
        }

        yPosition += 10; // Add vertical space between questions
      });

      yPosition += 5; // Reduce vertical space between sections
    });

    doc.save("examiner_form.pdf");
  };

  const downloadStudentForm = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text(title, 100, 20, { align: "center" }); // Centered title

    let yPosition = 40; // Initialize y position for sections

    sections.forEach((section, sectionIndex) => {
      if (centerSection) {
        doc.text(section.heading, 100, yPosition, { align: "center" });
        yPosition += 10; // Add vertical space
        doc.text(section.subheading, 100, yPosition, { align: "center" });
        yPosition += 10; // Add more vertical space
      } else {
        doc.setFontSize(14);
        doc.text(section.heading, 10, yPosition);
        yPosition += 10; // Add vertical space
        doc.setFontSize(12);
        doc.text(section.subheading, 10, yPosition);
        yPosition += 10; // Add more vertical space
      }

      section.questions.forEach((question, questionIndex) => {
        const textLines = doc.splitTextToSize(
          `Q${questionIndex + 1}: ${question.question}`,
          180
        );
        textLines.forEach((line) => {
          doc.setFontSize(12);
          doc.text(line, 20, yPosition);
          yPosition += 10; // Add vertical space for each line
        });

        if (question.type === "MCQ") {
          question.options.forEach((option, optionIndex) => {
            const x = 20;
            doc.rect(x, yPosition, 5, 5); // Checkbox
            doc.text(option, x + 10, yPosition + 4); // Option text
            yPosition += 10; // Add vertical space
          });
        } else {
          // Text-based question
          doc.setDrawColor(0); // Reset draw color
          doc.setLineWidth(0.5); // Set line width for underline
          const x = 20;
          doc.line(x, yPosition, x + 180, yPosition); // Underline
          yPosition += 10; // Add vertical space

          // Do not include text-based answers in student's PDF
        }

        yPosition += 5; // Reduce vertical space between questions

        // Check if there is enough space for the next question
        if (yPosition > 270) {
          doc.addPage(); // Start a new page
          yPosition = 20; // Reset y position
        }
      });

      yPosition += 5; // Reduce vertical space between sections
    });

    doc.save("student_form.pdf");
  };

  return (
    <Container
      maxWidth="lg"
      sx={{ bgcolor: "#eeeeee", minHeight: "90vh", paddingY: 10 }}
    >
      <Typography
        variant="h5"
        sx={{ textAlign: "center", marginBottom: "20px" }}
      >
        Question Paper Builder
      </Typography>
      <hr />
      <br />
      <TextField
        label="Question Paper Title"
        variant="outlined"
        fullWidth
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={centerSection}
            onChange={() => setCenterSection(!centerSection)}
            color="primary"
          />
        }
        label="Center Section Headings"
      />
      <br />
      {sections.map((section, sectionIndex) => (
        <div
          key={sectionIndex}
          style={{ marginLeft: "20px", marginBottom: "20px" }}
        >
          <TextField
            label="Section Heading"
            variant="outlined"
            fullWidth
            value={section.heading}
            onChange={(e) =>
              handleSectionChange(sectionIndex, "heading", e.target.value)
            }
          />
          <TextField
            label="Section Subheading"
            variant="outlined"
            fullWidth
            value={section.subheading}
            onChange={(e) =>
              handleSectionChange(sectionIndex, "subheading", e.target.value)
            }
          />
          {section.questions.map((question, questionIndex) => (
            <div
              key={questionIndex}
              style={{ marginLeft: "20px", marginBottom: "20px" }}
            >
              <TextField
                label="Question"
                variant="outlined"
                fullWidth
                multiline
                value={question.question}
                onChange={(e) =>
                  handleQuestionChange(
                    sectionIndex,
                    questionIndex,
                    "question",
                    e.target.value
                  )
                }
              />
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={question.type === "MCQ"}
                        onChange={() => {
                          const updatedSections = [...sections];
                          updatedSections[sectionIndex].questions[
                            questionIndex
                          ].type = question.type === "MCQ" ? "Text" : "MCQ";
                          setSections(updatedSections);
                        }}
                        name="questionType"
                        color="primary"
                      />
                    }
                    label="Multiple Choice Question"
                  />
                </Grid>
                {question.type === "MCQ" && (
                  <Grid item xs={12}>
                    <Typography variant="subtitle1">Options:</Typography>
                    {question.options.map((option, optionIndex) => (
                      <div key={optionIndex}>
                        <Checkbox
                          checked={question.correctAnswers.includes(
                            optionIndex
                          )}
                          onChange={() =>
                            handleCorrectAnswerChange(
                              sectionIndex,
                              questionIndex,
                              optionIndex
                            )
                          }
                        />
                        <TextField
                          label={`Option ${optionIndex + 1}`}
                          variant="outlined"
                          fullWidth
                          value={option}
                          onChange={(e) =>
                            handleQuestionChange(
                              sectionIndex,
                              questionIndex,
                              "options",
                              question.options.map((opt, idx) =>
                                idx === optionIndex ? e.target.value : opt
                              )
                            )
                          }
                        />
                      </div>
                    ))}
                  </Grid>
                )}
              </Grid>
              {question.type !== "MCQ" && (
                <TextField
                  label="Answer"
                  variant="outlined"
                  fullWidth
                  multiline
                  value={question.answers.join("\n")}
                  onChange={(e) =>
                    handleQuestionChange(
                      sectionIndex,
                      questionIndex,
                      "answers",
                      e.target.value.split("\n").map((ans) => ans.trim())
                    )
                  }
                />
              )}
              <Button
                variant="outlined"
                onClick={() => removeQuestion(sectionIndex, questionIndex)}
              >
                Remove Question
              </Button>
            </div>
          ))}
          <Button variant="outlined" onClick={() => addQuestion(sectionIndex)}>
            Add Question
          </Button>
          <Button
            variant="outlined"
            onClick={() => removeSection(sectionIndex)}
          >
            Remove Section
          </Button>
        </div>
      ))}
      <Button variant="outlined" onClick={addSection}>
        Add Section
      </Button>
      <Button variant="contained" color="primary" onClick={downloadExamForm}>
        Download Examiner Form
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={downloadStudentForm}
      >
        Download Student Form
      </Button>
    </Container>
  );
}

export default MainQuestionPaperBuilder;
