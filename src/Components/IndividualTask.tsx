import React, { useContext } from "react";
import { IndividualTask as it, SubTask as st } from "../Interfaces/Interfaces";
import Accordion from "react-bootstrap/Accordion";
import { Button } from "react-bootstrap";
import SubTask from "./SubTask";
import taskListContext from "../context/task-list-context";

const IndividualTask = ({ taskTitle, id, subTasks, isDone, index }: it) => {
  const taskListCtx = useContext(taskListContext);

  const toggleTaskHandler = () => {
    taskListCtx.toggleTask(id);
  };
  return (
    <Accordion>
      <Accordion.Item eventKey={`${index}`}>
        <Accordion.Header>
          <div className="d-flex ">
            <h3
              className={`m-1 ${isDone ? "text-decoration-line-through" : ""}`}
            >
              {taskTitle}
            </h3>
          </div>
        </Accordion.Header>
        <Accordion.Body className="mt-3">
          <div className="d-flex flex-column">
            {subTasks.length > 0 && !isDone ? (
              subTasks.map((subTask: st) => (
                <SubTask
                  title={subTask.title}
                  isDone={subTask.isDone}
                  id={subTask.id}
                  key={subTask.id}
                />
              ))
            ) : (
              <h3> this task don't have sub task</h3>
            )}
            <Button style={{ width: "30%" }} onClick={toggleTaskHandler}>
              {!isDone
                ? "mark whole task as done"
                : "mark whole task as not done "}
            </Button>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default IndividualTask;
