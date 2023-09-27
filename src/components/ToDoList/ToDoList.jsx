import {useEffect, useState} from "react";
import pb, {getTasks} from "../../lib/pocketbase.js";
import "./ToDoList.css"

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
                        <input type={"checkbox"} name={"completed"}/>
                        <h4>{item.title}</h4>
                    </div>
                    <p>{item.description}</p>
                </li>
            ))}
        </ul>
    )
}

export default ToDoList;