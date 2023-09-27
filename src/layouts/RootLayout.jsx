import { Link, Outlet } from "react-router-dom";

const RootLayout = () => {
    return (
        <div>
            <div>
                <Link to="/">
                    <strong>To-Do</strong>
                </Link>
            </div>

            <div>
                <Outlet />
            </div>
        </div>

    )
}

export default RootLayout