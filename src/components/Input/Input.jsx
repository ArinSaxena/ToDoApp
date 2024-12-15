import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "utility/taskSlice";
import "./Input.css";
// import View from "./view";

const Input = () => {
  const [inputTask, setInputTask] = useState({task:""});

  const dispatch = useDispatch();

  const setTask = (e) => {
    setInputTask({ ...inputTask, [e.target.name]: e.target.value });
    console.log(inputTask);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(inputTask.task));
    setInputTask({ task: "" });
    console.log(inputTask);
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
