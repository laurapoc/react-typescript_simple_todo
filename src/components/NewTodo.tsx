import React from "react";
import { useRef, useEffect, useState } from "react";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const [inputValue, setInputValue] = useState("");
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!todoTextInputRef.current) {
      return;
    }
    todoTextInputRef.current.focus();
  }, []);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    let enteredText = todoTextInputRef.current!.value;
    if (enteredText.trim().length === 0) {
      // Throw an error
      return;
    }
    props.onAddTodo(enteredText);
    setInputValue("");
  };

  const resetFormHandler = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    setInputValue(event.currentTarget.value);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} value={inputValue} onChange={resetFormHandler} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
