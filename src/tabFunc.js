import { useState } from "react";
export function Tabs(){
    const [inputValue, setInputValue] = useState(true);
    const login = () =>{
        setInputValue(true)
    }
    const register = () =>{
        setInputValue(false)
    }
    return(
        <div>
            <button onClick={login}>Login</button>
            <button onClick={register}>Register</button>
            {inputValue?
                (<div>Login mesage</div>):
                (<div>Register mesage</div>)
            }
        </div>
    );
}