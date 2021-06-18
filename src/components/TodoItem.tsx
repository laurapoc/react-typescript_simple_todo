// import Todo from "../models/todo";
import classes from "./TodoItem.module.css";

// const TodoItem: React.FC<{items: Todo}> = (props) => {
// return <li>{props.items.text}</li>
// }

const TodoItem: React.FC<{ text: string, removeTodoItem: () => void }> = (props) => {
  return <li className={classes.item} onClick={props.removeTodoItem}>{props.text}</li>;
};

export default TodoItem;
