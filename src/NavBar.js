import "./App.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function NavBar() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date());
        }, 1000)

        return () => clearInterval(interval);
    }, [])

    const getDateString = () => {
        return date.getHours().toString().padStart(2, 0) + ":" + date.getMinutes().toString().padStart(2, 0) + ":" + date.getSeconds().toString().padStart(2, 0);
    }

    return (
        <div className="navbar">
            <Link className="icon-link" to="/"><img src="logo192.png"></img>React Random</Link>
            <div>{getDateString(date)}</div>
        </div>
    );
}

export default NavBar;
