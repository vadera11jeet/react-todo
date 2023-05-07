import { Dispatch, SetStateAction, MouseEvent } from "react";

export type Dispatcher<S> = Dispatch<SetStateAction<S>>;
export type Component = React.ReactNode;
export type ClickEvent = MouseEvent<HTMLButtonElement>;
