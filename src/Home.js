import React from "react";
import { createContext, useState } from "react";
import { Link } from "react-router-dom";
import { LogNReg } from "./lognreg";
import { Navigation } from "./Navigation";
export const UserContext=createContext();
export function Home(){
    const [login,setLogin]=useState(false);
    return(
        <UserContext.Provider value={[login,setLogin]}>
        <div>
            <Navigation/>
            {login?
                <div>
                    <h1>Welcome to SVES Commerce</h1>
                    {/* <ProductList/> */}
                    <Link to="/products">Products</Link>
                </div>
            :
                <div>
                    <LogNReg/>
                </div>}
        </div>
        </UserContext.Provider>
    );
}