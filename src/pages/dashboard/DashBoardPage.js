import React, { useState } from "react";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "libs/firebase";
import { Outlet, useNavigate } from "react-router-dom";

import { AppBar } from 'components/appbar';
import { DashboardPageStyles } from './styles';
import { Sidebar } from "components/sidebar";

function DashBoardPage(props){
    const [isUser, setIsUser] = useState(false);
    const navigator = useNavigate();

    onAuthStateChanged(auth, (user)=> {
        if(user){
            setIsUser(true)
        } else {
            setIsUser(false)
            navigator('/')
        }
    })

    if(isUser){
        return(
            <>
            <AppBar/>
            <DashboardPageStyles>
                <Sidebar/>
                <Outlet/>
            </DashboardPageStyles>
            </>
        )
    } else {
        return null;
    }
}

export default DashBoardPage