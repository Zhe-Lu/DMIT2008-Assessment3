import React, {useState} from "react";
import {useNavigate} from "react-router-dom"
import {signInWithEmailAndPassword} from "firebase/auth"

import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

import { auth } from './../../libs/firebase'
import { Label } from "../../ui/forms";
import { Input } from "../../ui/forms";
import { SubmitButton } from "../../ui/buttons";
import { LoginPageStyles , FormControl } from "./styles";

function LoginPage(props){
    let navigation = useNavigate(); 

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const notify = (error) => toast.error(error.message,{
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });



    function onHandelSignIn(e){
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
        .then(userCredential=>{
            navigation('dashboard')
        })
        .catch(error=>{
            notify(error)
        })
    }

    return(
        <LoginPageStyles>
            <ToastContainer>

            </ToastContainer>
            <header>
                <h1>Welcome!</h1>
                <h2>Please Login</h2>
            </header>
            <form onSubmit={onHandelSignIn}>
                <FormControl>
                    <Label>Email</Label>
                    <Input type="text" placeholder="email@mail.com" onChange={(e)=> setEmail(e.target.value)}></Input>
                </FormControl>

                <FormControl>
                    <Label>Password</Label>
                    <Input type="text" placeholder="password" onChange={(e)=> setPassword(e.target.value)}></Input>
                </FormControl>

                <FormControl>
                    <SubmitButton padding="0.5rem 0">Sign In!</SubmitButton>
                </FormControl>
            </form>
        </LoginPageStyles>
    )
}

export default LoginPage