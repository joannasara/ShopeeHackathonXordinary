import * as React from 'react';

import s from './styles.scss';
import {LinkToProduct} from 'libraries/components/Link';

function FavouritesItemCard(props: {item: {item_id: number, shop_id: number, cover: string; name: string}}) {
    const {item} = props;
    return (
        <LinkToProduct  className={s.card} itemid = {item.item_id} shopid = {item.shop_id}>
            <div  className={s.card}>   
                <div>
                    <img src={item.cover} />
                </div> 
                <div className={s.name}>{item.name}</div>
            </div>
        </LinkToProduct>
        
    );
}

export default FavouritesItemCard;