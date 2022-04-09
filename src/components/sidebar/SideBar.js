import React from "react";

import { signOut } from "firebase/auth";
import { auth } from "libs/firebase";

import { Button } from "ui/buttons";
import { SideBarStyles } from './styles'
import ProductOptions from "./ProductOptions";


function Sidebar(props){
    function onLogOutRequest(e){
        signOut(auth);
    }

    return(
        <SideBarStyles>
            <header>
                <h2>Dashboard</h2>
            </header>

            <ProductOptions/>

            <Button
                onClick={onLogOutRequest}
                padding = "0.125rem 0.5rem"
                fs = "12px"
                margin = "4rem 0"
                width = "max-content"
            >Log Out</Button>
        </SideBarStyles>
    )
}

export default Sidebar;