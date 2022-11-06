import "./newTask.css";
import "./newT.css";
import { useState } from "react";

const NewTask = (props) => {
    const [task, taskChange] = useState("");


    const taskHandler = (event) => {
        event.preventDefault();
        taskChange(document.getElementById("task").value);
    }
    
    const submitHandler = async (event) => {
        event.preventDefault();
        taskChange("");
        let date = new Date (document.getElementById ("date").value);
        if (!date) date = new Date ();
        console.log (typeof date);
        props.onSaveData ({
            title : task,
            createdAt : new Date (document.getElementById ("date").value)
        });
        props.add ();
    };
    return (
        <div className="new-expense">
            <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>TASK NAME</label>
                        <input type="text" id="task" value={task} onChange={taskHandler} />
                        <label>Date</label>
                        <input type="date" id="date"/>
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button type="button" onClick={props.add}>Cancel</button>
                    <button type="submit">Add Task</button>
                </div>
            </form>
        </div>
    );
}


export default NewTask;