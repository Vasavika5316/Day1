import { useEffect,useState } from "react";
import { useContext } from "react";
import {CartContext} from "./App.js"
export function Cart(){
    const [globalCount,setGlobalCount]=useContext(CartContext);
    const [count,setCount]=useState(0);
    useEffect(()=>{
        console.log("Use effect is called");
    },[]);
    const btnupdatedec = () => {
        setCount(count-1);
        setGlobalCount(globalCount-1);
    }
    const btnupdateinc = () => {
        setCount(count+1);
        setGlobalCount(globalCount+1);
    }
    const addtocart = () =>{
        setCount(count + 1)
        setGlobalCount(globalCount+1);
    }
    return(
        <div>
            {count<=0 ?(
                <div>
                    <button className="btn btn-success" onClick={addtocart} >ADD TO CART</button>
                </div>
            ):(
                <div style={{display:"flex"}}>
                    <button className="btn btn-light" onClick={btnupdatedec} style={{border:"1px solid black"}}>-</button>
                    <h3 style={{margin:"0 10px"}}>{count} </h3>
                    <button className="btn btn-light" onClick={btnupdateinc} style={{border:"1px solid black"}}>+</button>
                </div>
            )}
        </div>
    );
}