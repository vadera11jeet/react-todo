import React, { useState } from "react";
import { SubTaskProps } from "../Interfaces/Interfaces";
import { Form } from "react-bootstrap";
const SubTask = ({ title, id, isDone, key }: SubTaskProps) => {
  const [done, setDone] = useState(isDone);
  const handleCheckboxChange = () => {
    setDone(!done);
  };
  return (
    <Form.Check
      className={`mb-2 ${isDone ? "text-decoration-line-through" : ""}`}
      type="checkbox"
      checked={done}
      onChange={handleCheckboxChange}
      label={title}
    />
  );
};

export default SubTask;
