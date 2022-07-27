import "./platinum_playable.scss";

const ItemBlock = ({ itemData, onHover = () => { } }) => {
    return (
        <div>
            <img className="item-block" src={itemData.imagePath} alt={itemData.name} onMouseOver={onHover} />
        </div>
    );
}

export default ItemBlock;