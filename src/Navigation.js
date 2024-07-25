
import { Link } from "react-router-dom";
export function Navigation(){
    return(
        <div>
            <Link to="/" >Home</Link>
            <Link to="/products" >Products</Link>
            <Link to="/products/product">Product</Link>
        </div>
    );
}