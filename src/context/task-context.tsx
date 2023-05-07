import React, { useState } from "react";
import { ChildComponent } from "../Interfaces/Interfaces";

const TaskContext = React.createContext({
  taskTitle: "",
  taskDescription: "",
  taskTitleValueUpdater: (_: string) => {},
  taskDescriptionValueUpdater: (_: string) => {},
  isTaskTitleInvalid: false,

  titleValidator: (_: boolean) => {},
});

export const TaskContextProvider = (props: ChildComponent) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isTaskTitleInvalid, setIsTaskTitleInvalid] = useState(false);

  const titleValueUpdater = (taskTitle: string) => {
    setTitle(taskTitle);
  };
  const descriptionValueUpdater = (taskDescription: string) => {
    setDescription(taskDescription);
  };

  const titleValidator = (isInValid: boolean) =>
    setIsTaskTitleInvalid(isInValid);

  return (
    <TaskContext.Provider
      value={{
        taskTitle: title,
        taskDescription: description,
        taskTitleValueUpdater: titleValueUpdater,
        taskDescriptionValueUpdater: descriptionValueUpdater,
        isTaskTitleInvalid,

        titleValidator,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
