import React, { useState } from "react";

function Form(props) {
  // setting the name & useState hook, default=''
  const [name, setName] = useState("");
  // handling the change of input, updating the users input as he's typing
  function handleChange(e) {
    setName(e.target.value);
  }
  // what happens on click Add btn
  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) {
      return;
    }
    props.addTask(name); // addTask defined in App.js
    setName(" ");
  }

  return (
    // tukaj onSubmit drug kot zgoraj
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-iput"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;
