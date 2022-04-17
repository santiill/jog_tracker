import React from "react";

const Filter = () => {
  return (
    <div className="filter_cont">
      <div className="filter_input_cont">
        <label className="filter_label">Date from</label>
        <input className="filter_input" />
      </div>
      <div className="filter_input_cont">
        <label className="filter_label">Date to</label>
        <input className="filter_input" />
      </div>
    </div>
  );
};

export default Filter;
