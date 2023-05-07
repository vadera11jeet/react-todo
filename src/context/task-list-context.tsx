import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import {
  ChildComponent,
  TaskList,
  Task,
  SubTask,
} from "../Interfaces/Interfaces";
import { TASKS } from "../utils/constant";

const taskListContext = React.createContext<TaskList>({
  taskList: [],
  addItemToTaskList: (title: string, description: string) => {},
  toggleTask: (id: string) => {},
});

export const TaskListContextProvider = (props: ChildComponent) => {
  const [taskList, setTaskList] = useState<any[]>(TASKS);

  const addTaskToList = (title: string, description: string) => {
    const subTasks: SubTask[] = [];
    description.split(",").forEach((subTaskTitle) => {
      if (subTaskTitle) {
        let newSubTask: SubTask = {
          id: uuid(),
          title: subTaskTitle.trim(),
          isDone: false,
        };
        subTasks.push(newSubTask);
      }
    });
    const newTask: Task = {
      id: uuid(),
      taskTitle: title,
      subTasks,
      isDone: false,
    };
    setTaskList((state) => [newTask, ...state]);
  };
  const toggleTaskHandler = (id: string) => {
    setTaskList((state) => {
      // const toggleTaskIndex = state.findIndex((task) => task.id === id)
      // const toggledTask = state[toggleTaskIndex]
      // const status = toggledTask.isDone
      // const updateTask = {...toggledTask, isDone : !status}
      // const updatedState = state.filter((task) => task.id !== id)

      const newState = state.map((task) => {
        if (task.id === id) {
          const updatedTask = { ...task };
          updatedTask.isDone = !task.isDone;
          return updatedTask;
        }
        return task;
      });
      return [...newState];
    });
  };

  const contextValue: TaskList = {
    taskList: taskList,
    addItemToTaskList: addTaskToList,
    toggleTask: toggleTaskHandler,
  };
  return (
    <taskListContext.Provider value={contextValue}>
      {props.children}
    </taskListContext.Provider>
  );
};

export default taskListContext;
