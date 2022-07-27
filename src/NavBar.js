import "./App.scss";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className="navbar">
            <Link className="icon-link" to="/"><img src="logo192.png"></img>React Random</Link>
        </div>
    );
}

export default NavBar;
