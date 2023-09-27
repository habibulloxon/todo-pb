import './App.css'
import ToDoList from "./components/ToDoList/ToDoList.jsx";
import CreateTask from "./components/CreateTask/CreateTask.jsx";
import "./App.css"
const App = () => {


    return (
        <div className={"wrap"}>
            <CreateTask />
            <ToDoList />
        </div>
    )
}

export default App
