import "./platinum_playable.scss";
import { getRarityColor } from "./item_data";

const ItemDescriptionBox = ({ itemData }) => {
    return (
        <div className="item-description_parent">
            {itemData != null && <div className="item-description">
                <div style={{ color: getRarityColor(itemData.rarity) }} className="item-description_name">{itemData.name}</div>
                <img className="item-description_image" src={itemData.imagePath} alt={itemData.name} />
                <div className="item-description_description">{itemData.description}</div>
            </div>}
        </div>
    );
}

export default ItemDescriptionBox;