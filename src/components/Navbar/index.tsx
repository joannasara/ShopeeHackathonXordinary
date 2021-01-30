import * as React from "react"
import { RouteComponentProps } from "react-router"
import s from "./styles.scss"

import { withRouter } from 'react-router-dom';

import HomeSvg from './home.svg';

const routeMap: any = {
    '/': 'Home',
    '/Swipe': 'Swipe',
    '/Favourites': 'Favourites',
}
function Navbar({location}: RouteComponentProps) {
    return (
    <div className={s.navbar}>
        <div></div>
        {routeMap[String(location.pathname)]}
        <HomeSvg className={s.homeIcon}/>
    </div>
    )

}

export default withRouter(Navbar);