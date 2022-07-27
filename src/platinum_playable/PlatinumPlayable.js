import "./platinum_playable.scss";
import { itemData } from "./item_data";
import ItemBlock from "./ItemBlock";

const PlatinumPlayable = () => {
    return (
        <div className="background">
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
                                {entry[1].sort((a, b) => a.name.localeCompare(b.name)).map((item, index) => <ItemBlock itemData={item} key={index} />)}
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    );
}

export default PlatinumPlayable;