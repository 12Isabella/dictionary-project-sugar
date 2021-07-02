import React, {useState} from "react";
import "./Dictionary.css";


export default function Dictionary() {
let [input, setInput] = useState("");

function handleSubmit (event){
    event.preventDefault ();
    alert (`Searching for ${input}`);

}

function handleChange (event){
    console.log(event.target.value);
    setInput(event.target.value);
}

    return (
    <div className="Dictionary">
    <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="search" placeholder="Enter your hopes and dreams..." />
    </form>
    
    </div>);
}