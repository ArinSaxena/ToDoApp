import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "utility/taskSlice";
import "./Input.css";

const Input = () => {
  const [inputTask, setInputTask] = useState({task:""});

  const dispatch = useDispatch();

  const setTask = (e) => {
    setInputTask({ ...inputTask, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(inputTask.task));
    setInputTask({ task: "" });
  };

  return (
    <div className="input-container">
      <form className="input-bar" onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          placeholder="What needs to be done?"
          value={inputTask.task}
          onChange={setTask}
        />
      </form>
    </div>
  );
};

export default Input;
