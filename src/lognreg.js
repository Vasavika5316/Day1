import { useState } from "react";
import {Login} from './login.js';import {Register} from './register.js'
import { Navigation } from "./Navigation.js";
export function LogNReg(){
    const [inputValue, setInputValue] = useState(true);
    const login = () =>{
        setInputValue(true)
    }
    const register = () =>{
        setInputValue(false)
    }
    return(
        <div>
            <Navigation/>
            <button onClick={login}>Login</button>
            <button onClick={register}>Register</button>
            {inputValue?
                (<div><Login/></div>):
                (<div><Register/></div>)
            }
        </div>
    );
}