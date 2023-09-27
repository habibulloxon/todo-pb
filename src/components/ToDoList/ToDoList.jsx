import {useEffect, useState} from "react";
import {deleteTask, getTasks} from "../../lib/pocketbase.js";
import "./ToDoList.css"
import {Link} from "react-router-dom";

const ToDoList = () => {
    const [tasks, setTasks] = useState([])
    useEffect(() => {
        getTasks()
            .then((resp) => setTasks(resp))
    }, [])
    return (
        <ul>
            {tasks.map((item) => (
                <li key={item.id}>
                    <div>
                        <div>
                            <input type={"checkbox"} name={"completed"}/>
                            <p><b>{item.title}</b></p>
                        </div>
                        <p>{item.description}</p>
                    </div>
                    <Link to={`edit/${item.id}?title=${item.title}&description=${item.description}`}>
                        <button>edit task</button>
                    </Link>
                    <button onClick={() => deleteTask(item.id)}>delete task</button>
                </li>
            ))}
            <Link to={"create"}>
                <button>Create</button>
            </Link>
        </ul>
    )
}

export default ToDoList;