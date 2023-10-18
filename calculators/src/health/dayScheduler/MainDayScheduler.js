import React, { useState } from "react";
import { Button, Container, Input, Typography } from "@mui/material";

function MainDayScheduler() {
  const [tasks, setTasks] = useState([]);
  const [time1, setTime1] = useState("");
  const [time2, setTime2] = useState("");
  const [task, setTask] = useState("");

  function handleUserInput(e) {
    if (!time1 || !time2 || !task) {
      alert("Please Fill all Fields ");
      setTask("");
      setTime2("");
      setTime1("");
      return;
    }

    const newTask = { taskId: tasks.length + 1, time1, time2, task };
    setTasks([...tasks, newTask]);
    setTask("");
    setTime2("");
    setTime1("");
  }

  function downloadTasks() {
    const tasksText = tasks
      .map(
        (task) =>
          `Date: ${new Date().toLocaleDateString()} Task ID: ${
            task.taskId
          }, Time1: ${task.time1}, Time2: ${task.time2}, Task: ${task.task}`
      )
      .join("\n");
    const blob = new Blob([tasksText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "tasks.txt";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <Container
      maxWidth="lg"
      sx={{ bgcolor: "#f0f0f0", minHeight: "90vh", paddingY: "10" }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography pt={1} variant="h5">
          Day Scheduler
        </Typography>
        <Typography pt={1} variant="h5">
          {new Date().toLocaleDateString()}
        </Typography>
      </Container>
      <hr />
      <br />
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <Button onClick={handleUserInput}>Add Task</Button>
        <Button onClick={downloadTasks}>Download Tasks</Button>
        <Input
          type="time"
          placeholder="Enter Starting Time"
          value={time1}
          onChange={(e) => setTime1(e.target.value)}
        />
        <Input
          type="time"
          placeholder="Enter Ending Time"
          value={time2}
          onChange={(e) => setTime2(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </Container>
      <hr />
      <Container sx={{ display: "flex", flexDirection: "column" }}>
        {tasks.length !== 0 &&
          tasks?.map((e) => (
            <Container
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: 1,
                padding: "8px",
                margin: "8px",
                borderRadius: "8px",
              }}
              key={e.taskId}
            >
              <Typography sx={{ color: "black" }}>{e.taskId}</Typography>
              <Typography>{e.time1}</Typography>
              <Typography>{e.time2}</Typography>
              <Typography>{e.task}</Typography>
            </Container>
          ))}
      </Container>
    </Container>
  );
}

export default MainDayScheduler;
