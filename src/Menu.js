import { Link } from "react-router-dom";

function Menu() {
    return (
        <div style={{ margin: "12px" }}>
            <h2>Menu</h2>
            <div>
                <Link to="/weather">Weather app</Link>
            </div>
            <div>
                <Link to="/platinum_playable">Platinum Playable</Link>
            </div>
        </div>
    );
}

export default Menu;
