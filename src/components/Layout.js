import Sidebar from "./Sidebar";
import './layout.css';
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div className="App">
            <Sidebar />
            <div className="page">
                <Outlet />
            </div>
        </div>
    )
}