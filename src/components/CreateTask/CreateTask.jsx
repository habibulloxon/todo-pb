import {useState} from "react";

import {useNavigate} from "react-router-dom";
import {createTask} from "../../lib/pocketbase.js";

const CreateTask = () => {
    const navigate = useNavigate()
    const [title, setTitle] = useState(null);
    const [desc, setDesc] = useState(null);

    const handleSubmit = () => {
        if(!title){
            window.alert("Please enter title")
            return
        }
        createTask(title, desc)
        navigate('..')
    }

    return (
        <>
            <p>Create task</p>
            <input type={"text"} placeholder={"title"} required={true} onChange={(e) => setTitle(e.target.value)}/>
            <input type={"text"} placeholder={"desc"} onChange={(e) => setDesc(e.target.value)}/>

            <button onClick={handleSubmit} className="btn btn-success">add task</button>
        </>
    )
}

export default CreateTask;