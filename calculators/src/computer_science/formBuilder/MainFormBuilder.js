import React, { useState } from "react";
import {
    Container,
    Typography,
    TextField,
    Button,
    Grid,
    Checkbox,
    FormControlLabel,
    Select,
    MenuItem,
    InputLabel,
} from "@mui/material";
import jsPDF from "jspdf";

function FormBuilderCalculator() {
    const [title, setTitle] = useState("");
    const [sections, setSections] = useState([
        {
            title: "",
            description: "",
            questions: [],
        },
    ]);

    const addSection = () => {
        setSections([...sections, { title: "", description: "", questions: [] }]);
    };

    const addQuestion = (sectionIndex) => {
        const updatedSections = [...sections];
        updatedSections[sectionIndex].questions.push({
            type: "short-answer",
            question: "",
            options: [], // For multiple-choice questions
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

    const handleQuestionTypeChange = (sectionIndex, questionIndex, value) => {
        const updatedSections = [...sections];
        updatedSections[sectionIndex].questions[questionIndex].type = value;
        setSections(updatedSections);
    };

    const addOption = (sectionIndex, questionIndex) => {
        const updatedSections = [...sections];
        updatedSections[sectionIndex].questions[questionIndex].options.push("");
        setSections(updatedSections);
    };

    const removeOption = (sectionIndex, questionIndex, optionIndex) => {
        const updatedSections = [...sections];
        updatedSections[sectionIndex].questions[questionIndex].options.splice(optionIndex, 1);
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

    const downloadForm = () => {
        const doc = new jsPDF();
        doc.setFontSize(16);
        doc.text(title, 100, 20, { align: "center" });

        sections.forEach((section, sectionIndex) => {
            doc.setFontSize(14);
            doc.text(section.title, 10, 40);
            doc.setFontSize(12);
            doc.text(section.description, 10, 50);

            section.questions.forEach((question, questionIndex) => {
                doc.setFontSize(12);
                doc.text(`Q${questionIndex + 1}: ${question.question}`, 20, 70);

                if (question.type === "multiple-choice") {
                    question.options.forEach((option, optionIndex) => {
                        doc.text(`- ${option}`, 30, 90 + optionIndex * 10);
                    });
                }

                // Check if there is enough space for the next question
                if (questionIndex < section.questions.length - 1) {
                    doc.addPage();
                }
            });

            // Check if there is enough space for the next section
            if (sectionIndex < sections.length - 1) {
                doc.addPage();
            }
        });

        doc.save("google_form.pdf");
    };

    return (
        <Container maxWidth="lg" sx={{ bgcolor: "#eeeeee", minHeight: "90vh", paddingY: 10 }}>
            <Typography variant="h5" sx={{ textAlign: "center", marginBottom: "20px" }}>
                Form Builder Calculator
            </Typography>
            <hr />
            <br />
            <TextField
                label="Form Title"
                variant="outlined"
                fullWidth
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <br />
            {sections.map((section, sectionIndex) => (
                <div key={sectionIndex} style={{ marginLeft: "20px", marginBottom: "20px" }}>
                    <TextField
                        label="Section Title"
                        variant="outlined"
                        fullWidth
                        value={section.title}
                        onChange={(e) => handleSectionChange(sectionIndex, "title", e.target.value)}
                    />
                    <TextField
                        label="Section Description"
                        variant="outlined"
                        fullWidth
                        value={section.description}
                        onChange={(e) => handleSectionChange(sectionIndex, "description", e.target.value)}
                    />
                    {section.questions.map((question, questionIndex) => (
                        <div key={questionIndex} style={{ marginLeft: "20px", marginBottom: "20px" }}>
                            <TextField
                                label="Question"
                                variant="outlined"
                                fullWidth
                                multiline
                                value={question.question}
                                onChange={(e) => handleQuestionChange(sectionIndex, questionIndex, "question", e.target.value)}
                            />
                            <FormControlLabel
                                control={
                                    <Select
                                        value={question.type}
                                        onChange={(e) => handleQuestionTypeChange(sectionIndex, questionIndex, e.target.value)}
                                    >
                                        <MenuItem value="short-answer">Short Answer</MenuItem>
                                        <MenuItem value="multiple-choice">Multiple Choice</MenuItem>
                                    </Select>
                                }
                                label="Question Type"
                            />
                            {question.type === "multiple-choice" && (
                                <div>
                                    {question.options.map((option, optionIndex) => (
                                        <div key={optionIndex}>
                                            <TextField
                                                label={`Option ${optionIndex + 1}`}
                                                variant="outlined"
                                                fullWidth
                                                value={option}
                                                onChange={(e) => {
                                                    const updatedSections = [...sections];
                                                    updatedSections[sectionIndex].questions[questionIndex].options[optionIndex] = e.target.value;
                                                    setSections(updatedSections);
                                                }}
                                            />
                                            <Button variant="outlined" onClick={() => removeOption(sectionIndex, questionIndex, optionIndex)}>
                                                Remove Option
                                            </Button>
                                        </div>
                                    ))}
                                    <Button variant="outlined" onClick={() => addOption(sectionIndex, questionIndex)}>
                                        Add Option
                                    </Button>
                                </div>
                            )}
                            <Button variant="outlined" onClick={() => removeQuestion(sectionIndex, questionIndex)}>
                                Remove Question
                            </Button>
                        </div>
                    ))}
                    <Button variant="outlined" onClick={() => addQuestion(sectionIndex)}>
                        Add Question
                    </Button>
                    <Button variant="outlined" onClick={() => removeSection(sectionIndex)}>
                        Remove Section
                    </Button>
                </div>
            ))}
            <Button variant="outlined" onClick={addSection}>
                Add Section
            </Button>
            <Button variant="contained" color="primary" onClick={downloadForm}>
                Download Google Form
            </Button>
        </Container>
    );
}


export default FormBuilderCalculator;
