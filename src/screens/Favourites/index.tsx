import * as React from 'react';
import FavouritesItemCard from './components/Itemcard'


function Favourites() {
    React.useEffect(() => {
        const store = JSON.parse(localStorage.getItem('favouriteStore') || "{}");
        setFavouriteList(store.items);
    }, []);
    
    const [favouriteList, setFavouriteList] = React.useState([]);

    function deleteFavourite(toDelete: {
        item_id: number,
        shop_id: number,
        cover: string,
        name: string
    }) {
        setFavouriteList(favouriteList.filter(favouriteItem => favouriteItem.item_id !== toDelete.item_id));
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
                <button onClick={() => deleteFavourite(item)}>del</button>
            </div>
        ))}
    
    </div>
    );
}

export default Favourites;