import React from "react";
import { Container } from "react-bootstrap";
import TaskList from "./TaskList";


const DisplayTask = () => {
  return (
    <Container className="mt-3">
      <TaskList />
    </Container>
  );
};

export default DisplayTask;
