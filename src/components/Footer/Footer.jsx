import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { markallcompleted, clearcompleted } from "utility/taskSlice";
import {updateStatusFilter, updateColorFilter} from "utility/filterSlice";
import "./Footer.css";

const Footer = () => {
  const dispatch = useDispatch();
  const  tasks = useSelector((state) => state.task.list);     //filter ka use here only

  const unmarkedtodos = tasks.filter((list) => list.isChecked !== true);

  const markcompleted = () => {
    dispatch(markallcompleted());
  };
  const deleteCompletedTodo = () =>{
    dispatch(clearcompleted());
  }                                            //USE MAP IN FILTER BY COLOR


  return (
    <div className="footer">
      <div>
        <h2>Actions</h2>
        <button onClick={markcompleted}>Mark All Completed</button>
        <button onClick={deleteCompletedTodo}>Clear Completed</button>
      </div>

      <div>
        <h2>Remaining Todos</h2>
        <h4>{unmarkedtodos.length} item left</h4>
      </div>

      <div>
        <h2>Filter by Status</h2>
        {/* <h4 onClick={() => setFilter("All")} style={{ cursor: "pointer" }}>All</h4>
        <h4 onClick={() => setFilter("Active")} style={{ cursor: "pointer" }}>Active</h4>
        <h4 onClick={() => setFilter("Completed")} style={{ cursor: "pointer" }}>Completed</h4> */}
      <h4 onClick={() => dispatch(updateStatusFilter("All"))}>All</h4>
      <h4 onClick={() => dispatch(updateStatusFilter("Active"))}>Active</h4>
      <h4 onClick={() => dispatch(updateStatusFilter("Completed"))}>Competed</h4>
      </div>

      <div>
        <h2>Filter by Color</h2>
        <div>
          <input type="checkbox" onClick={() => dispatch(updateColorFilter("Green"))}/>     
          <button></button>
          <p>Green</p>
        </div>

        <div>
          <input type="checkbox" onClick={() => dispatch(updateColorFilter("Orange"))} />
          <button></button>
          <p>Orange</p>
        </div>

        <div>
          <input type="checkbox" onClick={() => dispatch(updateColorFilter("Blue"))} />
          <button></button>
          <p>Blue</p>
        </div>

        <div>
          <input type="checkbox" onClick={() => dispatch(updateColorFilter("Red"))} />
          <button></button>
          <p>Red</p>
        </div>

        <div>
          <input type="checkbox" onClick={() => dispatch(updateColorFilter("Purple"))}/>
          <button></button>
          <p>Purple</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
