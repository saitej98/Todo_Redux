import React, { useContext } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { FaCheck } from "react-icons/fa";
import { TodoContext } from "../Context/TodoContext";
import { REMOVE_TODO } from "../Context/action.types";
import "bootstrap/dist/css/bootstrap.min.css";

const Todos = () => {
    const { todos, dispatch } = useContext(TodoContext);

    return (
        <ListGroup >
            {todos.map(todo => (
                <ListGroupItem key={todo.id}>
                    {todo.todoString}
                    <span
                        className="float-end"
                        onClick={() => {
                            dispatch({
                                type: REMOVE_TODO,
                                payload: todo.id
                            });
                        }}
                    >
                        <FaCheck />
                    </span>
                </ListGroupItem>
            ))}
        </ListGroup>
    );
};

export default Todos;
