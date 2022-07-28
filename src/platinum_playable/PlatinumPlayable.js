import "./platinum_playable.scss";
import { itemData } from "./item_data";
import ItemBlock from "./ItemBlock";
import ItemDescriptionBox from "./ItemDescriptionBox";
import { createContext, useState } from "react";
import SearchBar from "./SearchBar";
import SettingsBox from "./SettingsBox";

export const PlatinumPlayableSettingsContext = createContext();

const PlatinumPlayable = () => {
    const [currentItem, setCurrentItem] = useState(null);

    const [bigIconSize, setBigIconSize] = useState(true);
    const [sortReverse, setSortReverse] = useState(false);

    const onItemBlockHover = (item) => {
        setCurrentItem(item);
    }

    const sortItems = (items) => {
        items.sort((a, b) => a.rarity - b.rarity || a.name.localeCompare(b.name));
        if (sortReverse) items.reverse();
        return items;
    }

    return (
        <PlatinumPlayableSettingsContext.Provider value={{ bigIconSize, setBigIconSize, sortReverse, setSortReverse }}>
            <div className="header-flexbox">
                <SearchBar />
                <SettingsBox />
            </div>
            <div className="playable-platinum-parent">
                <ItemDescriptionBox itemData={currentItem} />
                <div className="flexbox-main">
                    {
                        Object.entries(itemData.reduce((acc, curr) => {
                            acc[curr.type] = acc[curr.type] || [];
                            acc[curr.type].push(curr);
                            return acc;
                        }, {})).map((entry, index) => {
                            return <div key={index}>
                                <h3>{entry[0]}</h3>
                                <div className="flexbox-category">
                                    {sortItems(entry[1]).map((item, index) => <ItemBlock itemData={item} key={index} onHover={onItemBlockHover} />)}
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </PlatinumPlayableSettingsContext.Provider>
    );
}

export default PlatinumPlayable;