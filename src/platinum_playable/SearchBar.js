import { useContext } from "react";
import { PlatinumPlayableSettingsContext } from "./PlatinumPlayable";
import "./platinum_playable.scss";

const SearchBar = ({ onSearch }) => {
    return (
        <div>
            <input placeholder="Search..." onChange={(e) => onSearch(e.target.value)}></input>
        </div>
    );
}

export default SearchBar;