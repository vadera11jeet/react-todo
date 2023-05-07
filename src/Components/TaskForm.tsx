import React, { useContext } from "react";
import Form from "react-bootstrap/Form";
import TaskContext from "../context/task-context";

const TaskForm = () => {
  const taskCtx = useContext(TaskContext);
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>task name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Task"
          value={taskCtx.taskTitle}
          onChange={(e) => taskCtx.taskTitleValueUpdater(e.target.value)}
        />
        {taskCtx.isTaskTitleInvalid && (
          <Form.Text className="text-danger">
            please provide valid task name
          </Form.Text>
        )}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>subtasks</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="enter comma separated subtask"
          value={taskCtx.taskDescription}
          onChange={(e) => taskCtx.taskDescriptionValueUpdater(e.target.value)}
        />

      </Form.Group>
    </Form>
  );
};

export default TaskForm;
