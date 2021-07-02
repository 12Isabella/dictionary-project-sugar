import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css";


export default function Dictionary() {
let [input, setInput] = useState("");

function handleResponse (response) {
    console.log(response.data[0]);
}

function handleSubmit (event){
    event.preventDefault ();
    

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${input}`;
    axios.get(apiUrl).then(handleResponse);

}

function handleChange (event){
    
    setInput(event.target.value);
}

    return (
    <div className="Dictionary">
    <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="search" placeholder="Enter your hopes and dreams..." />
    </form>
    
    </div>);
}