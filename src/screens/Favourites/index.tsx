import * as React from 'react';

function Favourites() {
    const store = JSON.parse(localStorage.getItem("favouriteStore") || "{}");
    const [favouriteList, setFavouriteList] = React.useState(store)
    return (
    <div> {favouriteList && 
        favouriteList.items && 
        favouriteList.items.map((item:any) => (<div>{item.item_id})</div>))}
    
    </div>
    );
}

export default Favourites;