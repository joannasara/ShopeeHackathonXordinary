import Item from 'components/Demo/screens/ApiFetch/Item';
import * as React from 'react';

import s from 'styles.scss';
import {LinkToProduct} from 'libraries/components/Link';
function FavouritesItemCard(props: {item: {item_id: number; shop_id: number; cover:string; name:string}}) {
    const {item} =  props;
    return (
    <LinkToProduct itemid={item.item_id} shopid={item.shop_id}>
        <div>
        <div>
            <img src={item.cover} />
        </div>
        <div>{item.name}</div>
        </div>
    </LinkToProduct>
    
    );

}

export default FavouritesItemCard;