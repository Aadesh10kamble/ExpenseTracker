import './App.css';
import { useState } from 'react';
import TaskList from "./Components/TaskList"
import NewTask from './Components/newTask';
import ExpensesFilter from './Components/ExpenseFilter';


// console.log (items);

const items = [{
  id: 1,
  title: "Do react",
  createdAt: new Date(),
  status: false
},
{
  id: 2,
  title: "Do aggregation pipeline",
  createdAt: new Date(),
  status: true
},
{
  id: 3,
  title: "Do NODEJS",
  createdAt: new Date(),
  status: false,
}, {
  id: 4,
  title: "aadesh kamble",
  createdAt: new Date(),
  status: false
},
{
  id: 5,
  title: "Done deal",
  createdAt: new Date(2021, 0, 4)
}];

function App() {
  const [yearNow, changeYear] = useState("2022");
  const [tasks, updateTasks] = useState(items);
  const [adding, isAdding] = useState(false);

  const saveData = (data) => {
    data.id = Math.floor(Math.random() * 1000);
    updateTasks((prevData => [data, ...prevData]));
  };

  const getYear = (year) => changeYear(year);
  const filterTasks = () => tasks.filter(el => el.createdAt.getFullYear() === +yearNow);
  const addingOn = () => isAdding((prevState) => !prevState);
  

  let form = <div className="new-expense">
    <button onClick={addingOn}>Add new Task</button>
  </div>;

  if (adding) form = <NewTask onSaveData={saveData} add={addingOn}/>

  return (
    <div className="App">
      <div className="expenses">
        {form}
        <ExpensesFilter onYear={getYear} currentYear={yearNow} />
        <TaskList items={filterTasks()} deleteData={saveData} />
      </div>
    </div>
  );
}

export default App;
