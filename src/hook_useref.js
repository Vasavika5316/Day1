import { useRef } from "react";

export function HookUseref(){
    const firstRef=useRef(null)
    const formSubmitted = (event) =>{
        event.preventDefault();
        console.log("form submitted...")
        console.log(firstRef.current.value)
        firstRef.current.value="";
    }
    return(
        <div>
            <form onSubmit={formSubmitted}>
                <input type="text" ref={firstRef} placeholder="Type"/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}