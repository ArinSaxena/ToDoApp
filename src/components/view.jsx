import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import ReadSingle from "./ReadSingle/ReadSingle";

const View = () => {
  // const {list} = useSelector((state) => state.task);
  const tasks = useSelector((state) => state.task.list);

  console.log(tasks);

  return (
    <div className="read-container">
      {tasks.map((task) => (
        <ReadSingle task={task} key={task.id} />
      ))}
    </div>
  );
};

export default View;
