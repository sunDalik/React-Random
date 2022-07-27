import "./platinum_playable.scss";

const ItemDescriptionBox = ({ itemData }) => {
    return (
        <div>
            <div>{itemData.name}</div>
            <img className="item-description_image" src={itemData.imagePath} alt={itemData.name} onMouseOver={onHover} />
            <div>{itemData.description}</div>
        </div>
    );
}

export default ItemDescriptionBox;