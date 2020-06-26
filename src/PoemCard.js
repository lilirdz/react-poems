import React from "react";
import { EditPoemButton } from "./EditPoemButton";

export function PoemCard(props) {
  return (
    <div className="ui card">
      <div className="content">
        <div className="header">{props.poem.name}</div>
      </div>
      <div className="content">{props.poem.content}</div>
      <div className="content">
        <button
          className="ui red button"
          onClick={() => props.delete(props.poem)}
        >
          Delete
        </button>
        <EditPoemButton editPoem={props.editPoem} poem={props.poem} />
      </div>
    </div>
  );
}
