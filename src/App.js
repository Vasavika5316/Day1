import {BrowserRouter,Routes,Route} from "react-router-dom"
// import { LogNReg } from "./lognreg";
import { createContext, useState } from "react";
import {Home} from './Home.js'
import { ProductList } from "./productlist";
import {Profile} from './profile.js';
export const GlobalContext=createContext();
export function App(){
    const [globalCount,setGlobalCount]=useState(0);
    const [globalProfile,setGlobalProfile]=useState({});
    const [globalLogin,setGlobalLogin]=useState(false);
    const [globalCartProducts,setGlobalCartProducts]=useState({})
    return(
        <GlobalContext.Provider value={{globalCount,setGlobalCount,globalProfile,setGlobalProfile,globalLogin,setGlobalLogin,globalCartProducts,setGlobalCartProducts}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<ProductList/>} />
                    <Route path="/profile" element={<Profile/>} />
                </Routes>
            </BrowserRouter>
        </GlobalContext.Provider>
    );
}