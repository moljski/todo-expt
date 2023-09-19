import React, { useState } from "react";

export default function Todo(props) {
  // setting editing state, initially false
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState("");

  function handleChange(e) {
    setNewName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (newName === "") {
      return;
    }
    props.editTask(props.id, newName);
    setNewName("");
    setEditing(false);
  }

  // defining two templates - editing + viewing
  const editingTemplate = (
    <form className="stack-small" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor={props.id} className="todo-label">
          New name for {props.name}
        </label>
        <input
          id={props.id}
          type="text"
          className="todo-text"
          value={newName}
          onChange={handleChange}
        />
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn todo-cancel"
          onClick={() => setEditing(false)}
        >
          Cancel
          <span className="visually-hidden">renaming {props.name}</span>
        </button>
        <button type="submit" className="btn btn__primary todo-edit">
          Save
          <span className="visually-hidden">new name for {props.name}</span>
        </button>
      </div>
    </form>
  );

  const viewTemplate = (
    <div className="stack-small">
      <div className="c-cb">
        <input
          type="checkbox"
          id={props.id}
          defaultChecked={props.completed}
          onChange={() => props.toggleTaskCompleted(props.id)}
        />
        <label htmlFor={props.id} className="todo-label">
          {props.name}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn" onClick={() => setEditing(true)}>
          Edit <span className="visually-hidden">{props.name}</span>
        </button>
        <button
          type="button"
          className="btn btn__danger"
          onClick={() => props.deleteTask(props.id)}
        >
          Delete <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
    </div>
  );

  // Začetni viewTemplate
  // <li className="todo stack-small">
  //   <div className="c-cb">
  //     <input
  //       type="checkbox"
  //       id={props.id}
  //       defaultChecked={props.completed}
  //       onChange={() => props.toggleTaskCompleted(props.id)}
  //     />
  //     <label
  //       htmlFor="{
  //       props.id
  //     }"
  //       className="todo-label"
  //     >
  //       {props.name}
  //     </label>
  //   </div>
  //   <div className="btn-group">
  //     <button type="button" className="btn">
  //       Edit <span className="visually-hidden">{props.name}</span>
  //     </button>
  //     <button
  //       type="button"
  //       className="btn btn__danger"
  //       onClick={() => props.deleteTask(props.id)}
  //     >
  //       Delete <span className="visually-hidden">{props.name}</span>
  //     </button>
  //   </div>
  // </li>

  // conditional rendering
  return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;
}
