import React, { useContext } from "react";
import taskListContext from "../context/task-list-context";
import { Task } from "../Interfaces/Interfaces";
import IndividualTask from "./IndividualTask";

const TaskList = () => {
  const taskListCtx = useContext(taskListContext);

  return (
    <>
      {taskListCtx.taskList.map((task: Task, index: number) => {
        return (
          <IndividualTask
            taskTitle={task.taskTitle}
            id={task.id}
            subTasks={task.subTasks}
            isDone={task.isDone}
            index={index}
          />
        );
      })}
    </>
  );
};

export default TaskList;
