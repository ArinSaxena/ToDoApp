import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, updateTask } from "utility/taskSlice";
import { useState } from "react";
import "./ReadSingle.css";
import Footer from "components/Footer/Footer";


const ReadSingle = ({ task }) => {
  const dispatch = useDispatch();

  const [selectedColor, setSelectedColor] = useState("");
  const [isChecked, setIschecked] = useState(false);

  const handleCheckbox = (e) => {
    setIschecked(!isChecked);
    dispatch(updateTask(isChecked))
  };
  const handleColor = (e) => {
    setSelectedColor(e.target.value);
    // dispatch()
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
            checked={isChecked}
            onChange={handleCheckbox}
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
            <option value="yellow" style={{ color: "orange" }}>
              Blue
            </option>
            <option value="blue" style={{ color: "blue" }}>
              Orange
            </option>
            <option value="red" style={{ color: "red" }}>
              Purple
            </option>
            <option value="brown" style={{ color: "purple" }}>
              Red
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
