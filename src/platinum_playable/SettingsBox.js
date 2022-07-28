import { useContext, useState } from "react";
import { PlatinumPlayableSettingsContext } from "./PlatinumPlayable";
import "./platinum_playable.scss";

const SettingsBox = () => {
    const { bigIconSize, setBigIconSize, sortReverse, setSortReverse } = useContext(PlatinumPlayableSettingsContext);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setIsOpen(!isOpen)}>Settings</button>
            <div className="settings-box">
                <div className="settings-box_inner" style={{ display: isOpen ? "block" : "none" }}>
                    Big icons <input type="checkbox" checked={bigIconSize} onChange={(e) => setBigIconSize(e.target.checked)} />
                    Reverse sort <input type="checkbox" checked={sortReverse} onChange={(e) => setSortReverse(e.target.checked)} />
                </div>
            </div>
        </div>
    );
}

export default SettingsBox;