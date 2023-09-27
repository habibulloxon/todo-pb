import {useState} from "react";
import {createTask} from "../../lib/pocketbase.js";

const CreateTask = () => {
    const [title, setTitle] = useState(null);
    const [desc, setDesc] = useState(null);

    const handleSubmit = () => {
        if(!title){
            window.alert("Please enter title")
            return
        }
        createTask(title, desc)

        setDesc("")
        setTitle("")

        window.location.reload()
    }

    return (
        <>
            <p>Create task</p>
            <input type={"text"} placeholder={"title"} required={true} onChange={(e) => setTitle(e.target.value)}/>
            <input type={"text"} placeholder={"desc"} onChange={(e) => setDesc(e.target.value)}/>

            <button onClick={handleSubmit}>add task</button>
        </>
    )
}

export default CreateTask;