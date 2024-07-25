import {BrowserRouter,Routes,Route} from "react-router-dom"
import { LogNReg } from "./lognreg";
import { ProductList } from "./productlist";
import { Product } from "./product";
export function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LogNReg/>} />
                <Route path="/products" element={<ProductList/>} />
                <Route path="/products/product" element={<Product/>} />
            </Routes>
        </BrowserRouter>
    );
}