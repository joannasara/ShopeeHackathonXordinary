import * as React from 'react';
import {RouteComponentProps} from 'react-router';

import {get} from 'libraries/utils/fetch';
import {Link} from 'libraries/components/Link';
import consts from 'consts';

import s from './styles.scss';

import favouriteStore from 'screens/favouriteStore';
import { store } from 'data/store';

const MAX_ITEM_LIMIT = 20;

function Swipe(props: RouteComponentProps) {
    const [item, setItem] = React.useState({ 
        name: '',
        cover: '',
        price: '',
        rating: '',
        sold: '',
        stock: '',
    });
    const [searchItems, setSearchItems] = React.useState([]);
    const [index, setIndex] = React.useState(0);
    const urlParams = new URLSearchParams(props.location.search);
    const keyword = urlParams.get('keyword')
    React.useEffect(() => {
        (async() => {
            const getSearchResponse = await get(`${consts.API_URL}item/search`, {
                keyword,
                offset: 0,
                limit: MAX_ITEM_LIMIT,
            });
            setSearchItems(getSearchResponse.data.items);
        })();
    }, [keyword]);
    React.useEffect(() => {
        (async() => {
            if (searchItems.length > 0) {
                const currItem = searchItems[index]
                const {item_id, shop_id} = currItem
                const getInfoResponse = await get(`${consts.API_URL}item/get_info`, {
                    item_id,
                    shop_id,
                });
                //console.log(getInfoResponse);
                setItem(getInfoResponse.data);
            }
        })();
    },[searchItems, index]);

    function leftClickIndex() {
        favouriteStore.items.push(item);
        localStorage.setItem('favouriteStore', JSON.stringify(favouriteStore))
        advanceIndex();
    }

    function rightClickIndex() {
        advanceIndex();
    }

    function advanceIndex() {
        if (index < MAX_ITEM_LIMIT - 1) {
            setIndex(index + 1);
        } else {
            setIndex(-1);
        }
    }
    
    return (
        <>
        {item && !!item.name && index >= 0 && (
            <div className={s.itemCard}>
                <img className={s.img} src = {item.cover} />
                <div className={s.itemName}>{item.name}</div>
                <br />
                <div className={s.itemDetails}>
                    <div>{`$${item.price}`}</div>
                    <div>{Array(Math.floor(Number(item.rating))).fill('⭐')}</div>
                </div>
                <br />
                <div className={s.itemStock}>
                    <div>Sold: {item.sold}</div>
                    <div>Stock: {item.stock}</div>
                </div>
            </div>
        )}
        {
            index < 0 && <Link to={'/Favourites'}>link to favourites</Link>
        }
        <div className={s.buttons}>
            <button className={s.button} onClick={leftClickIndex}>Add to Favourites</button>
            <button className={s.button} onClick={rightClickIndex}>right button</button>
        </div>
        </>

        /*<div>
            <div className={s.itemName}>Item name: {item && item.name && index >= 0}
            {
                index < 0 && <div>link to favourites</div>
            }
            <div>
                <button onClick={leftClickIndex}>left button</button>
                <button onClick={rightClickIndex}>right button</button>
            </div>
            
            </div>
            <div>
                {searchItems.map((searchItem) => (
                <div>{searchItem.name}</div> 
                ))}
            </div>
        </div>*/
        
    );
}

export default Swipe;