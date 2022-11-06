import Task from "./Task";
import "./Tasks.css"

const TaskList = (props) => {
    let context = <h3>No expenses Found</h3>;

    if (props.items.length > 0) {
        context = props.items.map((el) => {
            return <Task title={el.title}
                status={el.status}
                date={el.createdAt}
                key={el.id}
                delete={props.deleteData} />
        })
    };

    return (
        <div>{context}</div>
)
};

export default TaskList;