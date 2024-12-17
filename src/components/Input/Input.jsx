import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "utility/taskSlice";
import "./Input.css";

const Input = () => {
  const [inputTask, setInputTask] = useState("");

  const dispatch = useDispatch();

  const setTask = (e) => {
    setInputTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputTask !== "") {
      dispatch(addTask(inputTask));
      setInputTask("");
    }
  };

  return (
    <div className="input-container">
      <form className="input-bar" onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          placeholder="What needs to be done?"
          value={inputTask}
          onChange={setTask}
        />
      </form>
    </div>
  );
};

export default Input;
