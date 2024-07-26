import React, { useContext } from "react";
// import {  useState } from "react";
// import { Link } from "react-router-dom";
import { LogNReg } from "./lognreg";
import { Navigation } from "./Navigation";
import { GlobalContext } from "./App";
// export const UserContext=createContext();
export function Home(){
    // const [login,setLogin]=useState(false);
    const {globalLogin}=useContext(GlobalContext);
    return(
        // <UserContext.Provider value={[login,setLogin]}>
        <div>
            {globalLogin?
                <div> 
                    <Navigation/>
                    <h1>Welcome to SVES Commerce</h1>
                    {/* <ProductList/> */}
                    {/* <Link to="/products">Products</Link> */}
                </div>
            :
                <div>
                    <LogNReg/>
                </div>}
        </div>
        // </UserContext.Provider>
    );
}