import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import classes from "./Task.module.css";
import ModalComponent from "./UI/ModalComponent";
import TaskForm from "./TaskForm";
import TaskContext from "../context/task-context";
import taskListContext from "../context/task-list-context";
import { ClickEvent } from "../types/Types";

import { useNavigate } from "react-router-dom";

const Task = () => {
  const [isShowTaskForm, setIsShowTaskForm] = useState(false);
  const [isLogoutModal, setIsLogoutModal] = useState(false);
  const modalCloseHandler = () => setIsShowTaskForm(false);
  const taskCtx = useContext(TaskContext);
  const taskListCtx = useContext(taskListContext);
  const navigator = useNavigate();

  const taskSubmitHandler = (e: ClickEvent) => {
    e.preventDefault();
    if (taskCtx.taskTitle.trim().length === 0) {
      taskCtx.titleValidator(true);
      return;
    }

    setIsShowTaskForm(false);
    taskListCtx.addItemToTaskList(taskCtx.taskTitle, taskCtx.taskDescription);
    taskCtx.taskDescriptionValueUpdater("");
    taskCtx.taskTitleValueUpdater("");
    console.log(taskListCtx.taskList);
  };

  const logoutModalHandler = () => {
    setIsLogoutModal(true);
  };
  const logoutModalCloseHandler = () => {
    setIsLogoutModal(false);
  };

  const logOutHandler = () => {
    localStorage.removeItem("token");
    navigator("/");
  };

  return (
    <>
      <div className={classes.header}>
        <h1>Todo list</h1>
        <div className="d-flex">
          <Button
            variant="outline-dark"
            size="sm"
            onClick={() => setIsShowTaskForm((state) => !state)}
          >
            Add Todo
          </Button>
          <Button
            variant="outline-dark"
            size="sm"
            style={{
              marginLeft: "0.5rem",
              paddingRight: "1rem",
              paddingLeft: "1rem",
            }}
            onClick={logoutModalHandler}
          >
            Logout
          </Button>
          {isShowTaskForm && (
            <ModalComponent
              title="Enter your task"
              show={isShowTaskForm}
              modalCloseHandler={modalCloseHandler}
              modalSubmitHandler={taskSubmitHandler}
              submitButtonText="submit"
              closeButtonText="cancel"
            >
              <TaskForm />
            </ModalComponent>
          )}
          {isLogoutModal && (
            <ModalComponent
              title="Alert"
              show={isLogoutModal}
              modalCloseHandler={logoutModalCloseHandler}
              modalSubmitHandler={logOutHandler}
              submitButtonText="yes"
              closeButtonText="no"
            >
              <h5> Are you want to logout</h5>
            </ModalComponent>
          )}
        </div>
      </div>
    </>
  );
};

export default Task;
