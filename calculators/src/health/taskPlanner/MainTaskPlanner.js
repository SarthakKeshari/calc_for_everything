import React, { Component } from "react";
import { Container, Typography, Select, MenuItem, Box } from "@mui/material";

class TaskPlanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: "",
      selectedDate: "",
      taskInterval: "daily",
      tasks: [],
      isEditing: false,
      editedTaskIndex: null,
    };
  }

  componentDidMount() {
    const storedTasks = localStorage.getItem("taskPlannerTasks");
    if (storedTasks) {
      this.setState({ tasks: JSON.parse(storedTasks) });
    }
  }

  componentDidUpdate() {
    localStorage.setItem("taskPlannerTasks", JSON.stringify(this.state.tasks));
  }

  handleDateChange = (event) => {
    this.setState({ selectedDate: event.target.value });
  };

  handleTaskChange = (event) => {
    this.setState({ newTask: event.target.value });
  };

  handleIntervalChange = (event) => {
    this.setState({ taskInterval: event.target.value });
  };

  addTask = () => {
    const { newTask, selectedDate, taskInterval } = this.state;

    if (newTask.trim() === "" || selectedDate.trim() === "") return;

    this.setState((prevState) => ({
      tasks: [
        ...prevState.tasks,
        {
          text: prevState.newTask,
          date: prevState.selectedDate,
          interval: prevState.taskInterval,
        },
      ],
      newTask: "",
    }));
  };

  handleDateChange = (event) => {
    const selectedDate = event.target.value;
    const currentDate = new Date().toISOString().split("T")[0];
    if (selectedDate >= currentDate) {
      this.setState({ selectedDate });
    } else {
      alert("Please select a date that is not earlier than the current date.");
    }
  };

  editTask = (index) => {
    const taskToEdit = this.state.tasks[index];
    this.setState({
      isEditing: true,
      editedTaskIndex: index,
      newTask: taskToEdit.text,
      selectedDate: taskToEdit.date,
      taskInterval: taskToEdit.interval,
    });
  };

  saveEditedTask = () => {
    const { editedTaskIndex, newTask, selectedDate, taskInterval } = this.state;

    if (newTask.trim() === "" || selectedDate.trim() === "") return;

    this.setState((prevState) => {
      const updatedTasks = [...prevState.tasks];
      updatedTasks[editedTaskIndex] = {
        text: newTask,
        date: selectedDate,
        interval: taskInterval,
      };
      return {
        tasks: updatedTasks,
        isEditing: false,
        editedTaskIndex: null,
        newTask: "",
        selectedDate: "",
        taskInterval: "daily",
      };
    });
  };

  removeTask = (index) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((_, i) => i !== index),
      isEditing: false,
      editedTaskIndex: null,
      newTask: "",
      selectedDate: "",
      taskInterval: "daily",
    }));
  };

  render() {
    const {
      newTask,
      selectedDate,
      taskInterval,
      tasks,
      isEditing,
      editedTaskIndex,
    } = this.state;

    return (
      <Container
        maxWidth="lg"
        sx={{ bgcolor: "#eeeeee", minHeight: "90vh", paddingY: "10" }}
      >
        <Typography pt={1} variant="h5" sx={{ textAlign: "center" }}>
          Task Planner
        </Typography>
        <hr />
        <div>
          <label>
            Select Date:
            <input
              type="date"
              value={selectedDate}
              onChange={this.handleDateChange}
              style={{
                border: "1px solid #ccc",
                borderRadius: "5px",
                padding: "5px",
                fontSize: "16px",
                width: "15%",
              }}
            />
          </label>
          <label>
            Task Interval:
            <Select
              value={taskInterval}
              onChange={this.handleIntervalChange}
              style={{
                border: "1px solid #ccc",
                borderRadius: "5px",
                padding: "5px",
                margin: "20px",
                fontSize: "16px",
              }}
            >
              <MenuItem value="daily">Daily</MenuItem>
              <MenuItem value="weekly">Weekly</MenuItem>
              <MenuItem value="yearly">Yearly</MenuItem>
            </Select>
          </label>
        </div>
        <div>
          <label>
            Enter Task:
            <input
              type="text"
              value={newTask}
              onChange={this.handleTaskChange}
              style={{
                border: "1px solid #ccc",
                borderRadius: "5px",
                padding: "5px",
                margin: "20px",
                fontSize: "16px",
                width: "15vw",
              }}
            />
          </label>
          {isEditing ? (
            <button onClick={this.saveEditedTask}>Save Task</button>
          ) : (
            <button onClick={this.addTask}>Add Task</button>
          )}
        </div>
        <div>
          <h2>Tasks:</h2>
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>
                {isEditing && editedTaskIndex === index ? (
                  <input
                    type="text"
                    value={newTask}
                    onChange={this.handleTaskChange}
                  />
                ) : (
                  <span
                    style={{
                      display: "block",
                      fontSize: "25px",
                    }}
                  >
                    {task.text} <br />
                    <span
                      style={{
                        fontSize: "20px",
                      }}
                    >
                      (Date: {task.date}, Interval: {task.interval})
                    </span>
                  </span>
                )}
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "-40px",
                    marginRight: "100px",
                  }}
                >
                  {isEditing && editedTaskIndex === index ? (
                    <button onClick={this.saveEditedTask}>Save</button>
                  ) : (
                    <button onClick={() => this.editTask(index)}>Edit</button>
                  )}
                  <button onClick={() => this.removeTask(index)}>Remove</button>
                </Box>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    );
  }
}

export default TaskPlanner;
