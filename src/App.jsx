import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
} from "react-router-dom";

import './App.css'
import ToDoList from "./components/ToDoList/ToDoList.jsx";
import CreateTask from "./components/CreateTask/CreateTask.jsx";
import "./App.css"
import RootLayout from "./layouts/RootLayout.jsx";
import EditTask from "./components/EditTask/EditTask.jsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index={true} element={<ToDoList />} />
            <Route path="create" element={<CreateTask />} />
            <Route path="edit/:id" element={<EditTask />} />
        </Route>
    )
);
const App = () => {
    return <RouterProvider router={router} />;
}
export default App
