import React from "react";

import "./Footer.css";
const Footer = ({Checked}) => {
  return (
    <div className="footer">
      <div>
        <h2>Actions</h2>
        <button>Mark All Completed</button>
        <button>Clear Completed</button>
      </div>

      <div>

        <h2>Remaining Todos</h2>
        <h4>item left</h4>
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
        <button ></button>
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
