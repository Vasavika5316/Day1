import { useEffect,useState } from "react";
export function Hooks(){
    // const count=0;
    const [count,setCount]=useState(5);
    useEffect(()=>{
        // setCount(0);
        console.log("Use effect is called");
    },[]);
    return(
        <div>
            <h3>count {count} </h3>
            <button className="btn btn-dark" onClick={() => setCount(count + 1)}>Click</button>
        </div>
    );
}