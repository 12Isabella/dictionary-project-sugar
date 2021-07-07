import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
  let [input, setInput] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${input}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleChange(event) {
    setInput(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            type="search"
            placeholder="Enter your hopes and dreams..."
          />
        </form>
      </section>
      <Results results={results} />
    </div>
  );
}
