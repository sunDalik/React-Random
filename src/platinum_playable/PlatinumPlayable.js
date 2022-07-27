import "./platinum_playable.scss";
import { itemData } from "./item_data";
import ItemBlock from "./ItemBlock";
import ItemDescriptionBox from "./ItemDescriptionBox";
import { useState } from "react";

const PlatinumPlayable = () => {
    const [currentItem, setCurrentItem] = useState(null);

    const onItemBlockHover = (item) => {
        setCurrentItem(item);
    }

    return (
        <div className="playable-platinum-parent">
            <ItemDescriptionBox itemData={currentItem} />
            <div className="flexbox_main">
                {
                    Object.entries(itemData.reduce((acc, curr) => {
                        acc[curr.type] = acc[curr.type] || [];
                        acc[curr.type].push(curr);
                        return acc;
                    }, {})).map((entry, index) => {
                        return <div key={index}>
                            <h3>{entry[0]}</h3>
                            <div className="flexbox_category">
                                {entry[1].sort((a, b) => a.rarity - b.rarity || a.name.localeCompare(b.name)).map((item, index) => <ItemBlock itemData={item} key={index} onHover={onItemBlockHover} />)}
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    );
}

export default PlatinumPlayable;