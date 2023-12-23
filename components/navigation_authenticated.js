import { useEffect, useState } from "react";
import whoIs from "../assets/js/whoIs";

export default function NavigationAuthenticated() {
    const [authData, setAuthData] = useState([]);

    useEffect(() => {
        setAuthData(whoIs());
    }, []);

    const logoutUser = () => {
        localStorage.removeItem('userAuth');
        window.location.href = '/authenticate/login'
    }
    return (
        <>
        <ul className="nav bg-success justify-content-end" id="topNav">
            <li className="nav-item">
                <a className="nav-link" href="#" onClick={logoutUser}>
                    Logout
                </a>
            </li>
            <li className="nav-item">
                <a
                className="nav-link disabled"
                href="#"
                tabIndex={-1}
                aria-disabled="true"
                >
                    {authData.firstname}({authData.userType})
                </a>
            </li>
            </ul>

        </>
    );
}