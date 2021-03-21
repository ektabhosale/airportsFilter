//import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import React, { useState, useEffect, useRef } from "react";
function CheckBoxFilter(props) {
  return (
    <div>
      {/* hello */}
      <label>
        <input
          type="checkbox"
          name="fl-colour"
          value={props.labelName}
          id="red"
          onClick={(e) => {
            props.handleClick(e.target.value, e.target.checked);
            //  alert(e.target.value);
          }}
        />
        {props.labelName}
      </label>
    </div>
  );
}

export default CheckBoxFilter;
