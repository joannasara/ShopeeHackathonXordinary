import * as React from 'react'
import { RouteComponentProps } from 'react-router';
import s from './styles.scss'

import {withRouter} from 'react-router-dom'

const routeMap: any = {
    '/': 'Home',
    '/Swipe': 'Swipe',
    '/Favourites': 'Favourites',
}

function Navbar ({location}: RouteComponentProps) {
    return <div className={s.navbar}>
        <div className={s.title}>
            {routeMap[String(location.pathname)]}
        </div>
    </div>
}

export default withRouter(Navbar);