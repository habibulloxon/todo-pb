import { Link, Outlet } from "react-router-dom";
const RootLayout = () => {
    return (
        <div  className="container-sm d-flex flex-column">
            <div>
                <Link to="/">
                    <h2>To-Do with Pocketbase</h2>
                </Link>
            </div>
            <div>
                <Outlet />
            </div>
        </div>

    )
}

export default RootLayout