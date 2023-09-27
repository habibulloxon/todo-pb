import {useNavigate, useParams} from "react-router-dom";
import {useState} from "react";
import {editTask} from "../../lib/pocketbase.js";

const EditTask = () => {
    const navigate = useNavigate()
    const [title, setTitle] = useState(null);
    const [desc, setDesc] = useState(null);
    const {id} = useParams()

    const handleSubmit = () => {
        if(!title){
            window.alert("Please enter title")
            return
        }
        editTask(id, title, desc)
        navigate('..')
    }


    return (
        <>
            <p>Edit task</p>
            <input type={"text"} placeholder={"title"} required={true} onChange={(e) => setTitle(e.target.value)}/>
            <input type={"text"} placeholder={"desc"} onChange={(e) => setDesc(e.target.value)}/>

            <button onClick={handleSubmit }>edit task</button>
        </>
    )
}

export default EditTask