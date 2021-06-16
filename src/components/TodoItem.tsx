// import Todo from "../models/todo";

// const TodoItem: React.FC<{items: Todo}> = (props) => {
    // return <li>{props.items.text}</li>
// }


const TodoItem: React.FC<{text: string}> = (props) => {
    return <li>{props.text}</li>
        
    
}

export default TodoItem;