import React from "react";
import {Link, useNavigate} from "react-router-dom"
import {auth} from './../../libs/firebase'
import styled from 'styled-components';

import { Label } from "../../ui/forms";
import { Input } from "../../ui/forms";
import { Button, SubmitButton } from "../../ui/buttons";

const LoginPageStyles = styled.section`
    max-width: 400px;
    margin: 2rem auto;
    h1{
        font-size: 2rem;
    }
`

const FormControl= styled.div`
    margin-bottom: 2rem;
`


function LoginPage(props){
    let navigation = useNavigate(); 

    function onHandelSubmit(e){
        e.preventDefault();

        navigation('dashboard')
    }

    return(
        <LoginPageStyles>
            <header>
                <h1>Welcome!</h1>
                <h2>Please Login</h2>
            </header>
            <body>
                <FormControl>
                    <Label>Email</Label>
                    <Input type="email" placeholder="email@mail.com" required></Input>
                </FormControl>

                <FormControl>
                    <Label>Password</Label>
                    <Input type="password" placeholder="password"></Input>
                </FormControl>

                <FormControl>
                    <SubmitButton padding="0.5rem 0">Sign In!</SubmitButton>
                </FormControl>
            </body>
        </LoginPageStyles>
    )
}

export default LoginPage