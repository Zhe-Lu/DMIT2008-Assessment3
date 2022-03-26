import React from "react";
import {Link} from "react-router-dom"

import {AppBarItems, AppBarStyles, AppBarItem} from './styles';

function AppBar (props){
    return(
        <AppBarStyles>
            <AppBarItems>
                <AppBarItem><Link to="/">Login Page</Link></AppBarItem>
                <AppBarItem><Link to="/dashboard">DashBoard Page</Link></AppBarItem>
            </AppBarItems>
        </AppBarStyles>
    )
}

export default AppBar