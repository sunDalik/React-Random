import { useContext } from "react";
import { PlatinumPlayableSettingsContext } from "./PlatinumPlayable";
import "./platinum_playable.scss";

const SearchBar = () => {
    return (
        <div>
            <input placeholder="Search..."></input>
        </div>
    );
}

export default SearchBar;