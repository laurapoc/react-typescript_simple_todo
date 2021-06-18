import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

const Todos: React.FC<{ items: Todo[], removeTodoItem: (id: string) => void }> = (props) => {

  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        // <li key={item.id}>{item.text}</li>
        // <TodoItem key={item.id} items={item} />
        <TodoItem key={item.id} text={item.text} removeTodoItem={props.removeTodoItem.bind(null, item.id)} />
      ))}
    </ul>
  );
};

export default Todos;
