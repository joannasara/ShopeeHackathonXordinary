import * as React from 'react';
import FavouritesItemCard from './components/Itemcard';

import s from './styles.scss';


function Favourites() {
    React.useEffect(() => {
        const store = JSON.parse(localStorage.getItem('favouriteStore') || "{}");
        setFavouriteList(store.items);
    }, []);
    
    const store = JSON.parse(localStorage.getItem('favouriteStore') || "{}");
    const [favouriteList, setFavouriteList] = React.useState([store]);

    function deleteFavourite(toDelete: {
        item_id: number,
        shop_id: number,
        cover: string,
        name: string
    }) {
        setFavouriteList(favouriteList.filter(favouriteItem => !(favouriteItem.item_id === toDelete.item_id && favouriteItem.shop_id === toDelete.shop_id
            && favouriteItem.cover === toDelete.cover && favouriteItem.name === toDelete.name)));
    }

    return (
    <div> 
        {favouriteList.map((item:{
            item_id: number,
            shop_id: number,
            cover: string,
            name: string
        }) => (
            <div key={item.item_id}>
                <FavouritesItemCard item = {item}/>
                <button className={s.button} onClick={() => deleteFavourite(item)}>del</button>
            </div>
        ))}
    
    </div>
    );
}

export default Favourites;