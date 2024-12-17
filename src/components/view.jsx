import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import ReadSingle from "./ReadSingle/ReadSingle";

const View = () => {
  // const {list} = useSelector((state) => state.task);
  const tasks = useSelector((state) => state.task.list);
  const {status, color} = useSelector((state) => state.filter)

  

  // console.log(tasks);

  // const filteredTasks = tasks.filter((task) =>{
  //   if(filter === "All") return true;
  //   if(filter === "Active") return !task.isChecked ;
  //   if(filter === "Completed") return task.isChecked ;

  // })

  return (
    <div className="read-containaer">
      {tasks.map((task) => (
        <ReadSingle task={task} key={task.id} />
      ))}
    </div>
  );
};

export default View;
