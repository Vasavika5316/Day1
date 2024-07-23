import { useEffect,useState } from "react";
export function Incdec(){
    const [count,setCount]=useState(0);
    useEffect(()=>{
        console.log("Use effect is called");
    },[]);
    const btnupdatedec = () => {
        setCount(count-1);
    }
    return(
        <div style={{display:"flex"}}>
            <button className="btn btn-light" onClick={() => setCount(count + 1)} style={{border:"1px solid black"}}>+</button>
            <h3 style={{margin:"0 10px"}}>{count} </h3>
            <button className="btn btn-light" onClick={btnupdatedec} style={{border:"1px solid black"}}>-</button>
        </div>
    );
}