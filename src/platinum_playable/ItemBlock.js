import { useContext } from "react";
import { PlatinumPlayableSettingsContext } from "./PlatinumPlayable";
import "./platinum_playable.scss";

const ItemBlock = ({ itemData, onHover = () => { } }) => {
    const { bigIconSize } = useContext(PlatinumPlayableSettingsContext);
    return (
        <div>
            <img className={`item-block_image ${bigIconSize ? "big-image" : "small-image"}`} src={itemData.imagePath} alt={itemData.name} onMouseOver={() => onHover(itemData)} onMouseLeave={() => onHover(null)} />
        </div>
    );
}

export default ItemBlock;