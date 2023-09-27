import React, { useEffect, useState } from "react";
import { deleteTask, getTasks } from "../../lib/pocketbase.js";
import { Link } from "react-router-dom";
import "./ToDoList.css";

const TaskItem = ({ id, title, description, onDelete }) => {
    const handleDelete = () => {
        onDelete(id);
    };

    return (
        <li key={id}>
            <div>
                <div>
                    <input type="checkbox" name="completed" />
                    <p>
                        <b>{title}</b>
                    </p>
                </div>
                <p>{description}</p>
            </div>
            <Link to={{ pathname: `edit/${id}`, state: { title, description } }}>
                <button>Edit Task</button>
            </Link>
            <button onClick={handleDelete}>Delete Task</button>
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
        <div>
            <ul>
                {tasks.map((task) => (
                    <TaskItem key={task.id} {...task} onDelete={handleDeleteTask} />
                ))}
            </ul>
            <Link to="create">
                <button>Create</button>
            </Link>
        </div>
    );
};

export default ToDoList;
