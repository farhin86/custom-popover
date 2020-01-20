import React from "react";
import "./index.css";

export default function PopoverItem(props) {
  return (
    <div
      key={props.index}
      className="popover-items"
      onClick={() => props.popoverLiSelect(props.index)}
    >
      {props.title}
    </div>
  );
}
