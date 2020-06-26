import React from "react";
import { PoemCard } from "./PoemCard";

export function PoemList(props) {
  return (
    <div className="ui cards" style={{ marginTop: 20 }}>
      {props.poemList.map((poem) => (
        <PoemCard
          delete={props.deletePoem}
          poem={poem}
          editPoem={props.editPoem}
        />
      ))}
    </div>
  );
}
