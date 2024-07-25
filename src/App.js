import {BrowserRouter,Routes,Route} from "react-router-dom"
// import { LogNReg } from "./lognreg";
import { createContext, useState } from "react";
import {Home} from './Home.js'
import { ProductList } from "./productlist";
import { Product } from "./product";
export const CartContext=createContext();
export function App(){
    const [globalCount,setGlobalCount]=useState(0);
    return(
        <CartContext.Provider value={[globalCount,setGlobalCount]}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/products" element={<ProductList/>} />
                    <Route path="/product" element={<Product/>} />
                </Routes>
            </BrowserRouter>
        </CartContext.Provider>
    );
}