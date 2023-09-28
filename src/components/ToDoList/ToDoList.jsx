import React, { useEffect, useState } from "react";
import { completeTask, deleteTask, getTasks } from "../../lib/pocketbase.js";
import { Link } from "react-router-dom";
import "./ToDoList.css";

const TaskItem = ({ id, title, description, onDelete }) => {
    const [completed, setCompleted] = useState(false);

    const handleDelete = () => {
        onDelete(id);
    };

    const handleToggleCompletion = () => {
        const newCompleted = !completed;
        setCompleted(newCompleted);
        completeTask(id, title, newCompleted);
    };

    return (
        <li key={id}>
            <div className="d-flex justify-content-center flex-column">
                <div className="align-items-center">
                    <input
                        type="checkbox"
                        name="completed"
                        checked={completed}
                        onChange={handleToggleCompletion}
                        className="form-check-input"
                    />
                    <h5 className="m-1">
                        <b>{title}</b>
                    </h5>
                </div>
                <p className="m-0">{description}</p>
            </div>
            <Link to={{ pathname: `edit/${id}`, state: { title, description } }}>
                <button className="btn btn-primary">Edit Task</button>
            </Link>
            <button className="btn btn-danger" onClick={handleDelete}>Delete Task</button>
        </li>
    );
};

const ToDoList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getTasks().then((resp) => setTasks(resp));
    }, []);

    const handleDeleteTask = (taskId) => {
        deleteTask(taskId);
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    };

    return (
        <div className="d-flex flex-column align-items-left">
            <ul className="p-0">
                {tasks.map((task) => (
                    <TaskItem key={task.id} {...task} onDelete={handleDeleteTask} />
                ))}
            </ul>
            <Link to="create">
                <button className="btn btn-success">Create</button>
            </Link>
        </div>
    );
};

export default ToDoList;
