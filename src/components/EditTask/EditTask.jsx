import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTask, editTask } from "../../lib/pocketbase.js";

const EditTask = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    useEffect(() => {
        const fetchTaskDetails = async () => {
            const task = await getTask(id);
            setTitle(task.title || "");
            setDesc(task.description || "");
        };

        fetchTaskDetails();
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title) {
            window.alert("Please enter title");
            return;
        }

        editTask(id, title, desc);
        navigate("..");
    };

    return (
        <form onSubmit={handleSubmit}>
            <p>Edit task</p>
            <label>
                Title:
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </label>
            <label>
                Description:
                <input
                    type="text"
                    placeholder="Description"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                />
            </label>
            <button type="submit"  className="btn btn-success">Save task</button>
        </form>
    );
};

export default EditTask;
