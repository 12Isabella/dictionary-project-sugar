import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (index, definition) {
        return (
          <div key={index}>
            <p>
              {definition.definition}
              <br />
              <em> {definition.example} </em>
            </p>
          </div>
        );
      })}
    </div>
  );
}
