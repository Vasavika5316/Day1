import { useRef,useState,useEffect } from "react";
export function Login(){
    const idRef=useRef(null);
    const pwRef=useRef(null);
    const [status, setStatus] = useState("");
    const formSubmitted = (event) =>{
        event.preventDefault();
        if(idRef.current.value === pwRef.current.value){
            setStatus("correct");
        }else{
            setStatus("incorrect");
        }
        idRef.current.value="";   
        pwRef.current.value=""; 
    }
    useEffect(() =>{
        idRef.current.focus();
    },[]);
    return(
        <div style={{display:"flex",justifyContent:"center",marginTop:"150"}}>
            <div className="card" style={{width:"400",height:"320",padding:"20"}}>
                <form >
                    <legend>Login</legend>
                    <p>Provide your details to login</p>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput" className="form-label">College Id</label>
                        <input type="text" className="form-control" id="formGroupExampleInput" ref={idRef} placeholder="College Id"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" ref={pwRef} placeholder="Password"/>
                    </div>
                    <div style={{ display:"flex",justifyContent:"flex-end"}}>
                    <button type="submit" className="btn btn-primary" onClick={formSubmitted} >Login</button>
                    </div>
                    </form>
                    <h1>{status}</h1>
            </div>
        </div>
    );
}