import * as React from 'react'

import s from './styles.scss'
import {Link} from 'libraries/components/Link'

import {withRouter, RouteComponentProps } from 'react-router-dom';

/*const routeMap: any = {
    '/': 'Home',
    '/Swipe': 'Swipe',
    '/Favourites': 'Favourites',
}*/

function Footer ({location}: RouteComponentProps) {
    if (location.pathname === '/Favourites') {
        return null;
    }
    return <div className={s.footer}>
        <Link to={'/Favourites'}>Favourites</Link>
    </div>
}

export default withRouter(Footer);