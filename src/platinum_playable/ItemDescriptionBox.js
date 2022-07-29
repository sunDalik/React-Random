import "./platinum_playable.scss";
import { getRarityColor, itemData } from "./item_data";

const ItemDescriptionBox = ({ itemData: currentItem }) => {
    return (
        <div className="item-description_parent">
            {currentItem != null && <div className="item-description">
                <div style={{ color: getRarityColor(currentItem.rarity) }} className="item-description_name">{currentItem.name}</div>
                <img className="item-description_image" src={currentItem.imagePath} alt={currentItem.name} />
                <div className="item-description_description">{currentItem.description}</div>
            </div>}
        </div>
    );
}

export default ItemDescriptionBox;