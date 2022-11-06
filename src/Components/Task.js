import "./Tasks.css"
import TaskDate from "./TaskDate";
import { useState } from "react";

const Task = (props) => {
    const [statusBool,changeStatus] = useState (props.status);
    const statusUpdate = async () => {
        changeStatus ((prevStatus) => !prevStatus);
    };
    
    const status = statusBool ? "Completed" : "Incomplete";

    return (
        <div className="expense-item" id ={props.id}>
            <TaskDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price" onClick ={statusUpdate}>{status}</div>
            </div>
        </div>
    )
}

export default Task

