import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { markallcompleted, clearcompleted } from "utility/taskSlice";
import "./Footer.css";

const Footer = () => {
  const dispatch = useDispatch();
  const  tasks = useSelector((state) => state.task.list);

  const unmarkedtodos = tasks.filter((list) => list.isChecked !== true);

  const markcompleted = () => {
    dispatch(markallcompleted());
  };
  const deleteCompletedTodo = () =>{
    dispatch(clearcompleted());
  }

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
        <h4>All</h4>
        <h4>Active</h4>
        <h4>Completed</h4>
      </div>

      <div>
        <h2>Filter by Color</h2>
        <div>
          <input type="checkbox" />
          <button></button>
          <p>Green</p>
        </div>

        <div>
          <input type="checkbox" />
          <button></button>
          <p>Blue</p>
        </div>

        <div>
          <input type="checkbox" />
          <button></button>
          <p>Orange</p>
        </div>

        <div>
          <input type="checkbox" />
          <button></button>
          <p>Purple</p>
        </div>

        <div>
          <input type="checkbox" />
          <button></button>
          <p>Red</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
