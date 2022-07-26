import { Link } from "react-router-dom";

function Menu() {
    return (
        <div>
            <h2>Menu</h2>
            <Link to="/weather">Weather app</Link>
        </div>
    );
}

export default Menu;
