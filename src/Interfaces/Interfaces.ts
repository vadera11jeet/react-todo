import React from "react";
import { ClickEvent, Component } from "../types/Types";

export interface ModalComponentProps {
  show: boolean;
  modalCloseHandler: () => void;
  children: Component;
  modalSubmitHandler: (e: ClickEvent) => void;
  title: string;
  submitButtonText: string;
  closeButtonText: string;
}

export interface ChildComponent {
  children: Component;
}

export interface SubTask {
  id: string;
  title: string;
  isDone: boolean;
}

export interface Task {
  id: string;
  taskTitle: string;
  isDone: boolean;
  subTasks: SubTask[];
}

export interface TaskList {
  taskList: Task[];
  addItemToTaskList: (title: string, description: string) => void;
  toggleTask: (id: string) => void;
}

export interface AuthProps {
  isAuth: boolean;
  children: React.ReactNode;
}

export interface SubTaskProps {
  id: string;
  title: string;
  isDone: boolean;
  key: string;
}
export interface IndividualTask {
  id: string;
  taskTitle: string;
  isDone: boolean;
  index: number;
  subTasks: SubTask[];
}
