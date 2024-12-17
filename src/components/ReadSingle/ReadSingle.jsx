import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, updateColor, updateCheckbox, updateTask } from "utility/taskSlice";
import { useState } from "react";
import "./ReadSingle.css";


const ReadSingle = ({ task }) => {
  const dispatch = useDispatch();

  // const tasks = useSelector((state) => state.task.list)

  // const [selectedColor, setSelectedColor] = useState("");
  // const [isChecked, setIschecked] = useState(false);

  const handleCheckbox = (e) => {
    // setIschecked((val) => !val);
    dispatch(updateCheckbox({id:task.id, checked:e.target.checked}));
  };
  const handleColor = (e) => {
    // setSelectedColor(e.target.value);
    dispatch(updateColor({id:task.id,color:e.target.value}));
  };


  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };
  return (
    <div className="single-todo">
      <div className="left-div">
        <div className="checkbox-btn">
          <input
            type="checkbox"
            checked={task.isChecked}
            onClick={handleCheckbox}
          />
        </div>
        <div className="single-input-render">{task.title}</div>
      </div>

      <div className="right-div">
        <div className="drop-down">
          <select name="colors" id="colors" onChange={handleColor}>
            <option value="">Select Color</option>
            <option value="green" style={{ color: "green" }}>
              Green
            </option>
            <option value="orange" style={{ color: "orange" }}>
              Orange
            </option>
            <option value="blue" style={{ color: "blue" }}>
              Blue
            </option>
            <option value="red" style={{ color: "red" }}>
              Red
            </option>
            <option value="purple" style={{ color: "purple" }}>
              Purple
            </option>
          </select>
        </div>
        <button className="delete-btn" onClick={handleDelete}>
          &#10006;
        </button>
      </div>
    </div>
  );
};

export default ReadSingle;
