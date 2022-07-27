import "./platinum_playable.scss";

const ItemBlock = ({ itemData, onHover = () => { } }) => {
    return (
        <div>
            <img className="item-block_image" src={itemData.imagePath} alt={itemData.name} onMouseOver={() => onHover(itemData)} onMouseLeave={() => onHover(null)} />
        </div>
    );
}

export default ItemBlock;