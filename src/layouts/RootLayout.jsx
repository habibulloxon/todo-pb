import { Link, Outlet } from "react-router-dom";

const RootLayout = () => {
    return (
        <div>
            <div>
                <Link to="/">
                    To-do
                </Link>
            </div>

            <div>
                <Outlet />
            </div>
        </div>

    )
}

export default RootLayout