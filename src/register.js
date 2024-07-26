import { useContext, useState } from "react";
import { GlobalContext } from "./App";
// import { useRef,useEffect } from "react";
export function Register(){
    const [details,setDetails]=useState([])
    const [collegeId, setCollegeId] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [branch, setBranch] = useState("");
    const [year, setYear] = useState("");
    const [gender, setGender] = useState("");
    const {setGlobalProfile}=useContext(GlobalContext);
    const getCollegeId = (event) => {
        setCollegeId(event.target.value);
        console.log(event.target.value);
    }
    const getPassword = (event) => {
        setPassword(event.target.value);
        console.log(event.target.value);
    }
    const getEmail = (event) => {
        setEmail(event.target.value);
        console.log(event.target.value);
    }
    const getBranch = (event) => {
        setBranch(event.target.value);
        console.log(event.target.value);
    }
    const getYear = (event) => {
        setYear(event.target.value);
        console.log(event.target.value);
    }
    const getGender = (event) => {
        setGender(event.target.value);
        console.log(event.target.value);
    }
    const onSubmit = (event) =>{
        event.preventDefault();
        const data={collegeId,password,email,branch,year,gender}
        // console.log(data);
        setDetails(data);
        setGlobalProfile(data);
        console.log(details);
        setCollegeId("");
        setPassword("");
        setEmail("");        
        setBranch("");
        setYear("");
        setGender("");
    }
    // const idRef=useRef(null);
    // const pwRef=useRef(null);
    // const eidRef=useRef(null);
    // const brRef=useRef(null);
    // const yrRef=useRef(null);
    // const gdRef=useRef(null);
    // const formSubmitted = (event) =>{
    //     event.preventDefault();
    //     console.log(idRef.current.value);
    //     console.log(pwRef.current.value);
    //     console.log(eidRef.current.value);
    //     console.log(brRef.current.value);
    //     console.log(brRef.current.value);
    //     console.log(gdRef.current.value);
    //     idRef.current.value="";   
    //     pwRef.current.value=""; 
    //     eidRef.current.value="";
    //     brRef.current.value="";
    //     yrRef.current.value="";
    //     gdRef.current.value="";
    // }
    // useEffect(() =>{
    //     idRef.current.focus();
    // },[]);
    return(
        <div style={{display:"flex",justifyContent:"center",marginTop:"50"}}>
            <div className="card" style={{width:"400",height:"600",padding:"20"}}>
                <form >
                    <legend>Register</legend>
                    <p>Provide your details to login</p>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput" className="form-label">College Id</label>
                        {/* <input type="text" className="form-control" ref={idRef} id="formGroupExampleInput" placeholder="College Id"/> */}
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="College Id"  value={collegeId} onChange={getCollegeId}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        {/* <input type="password" className="form-control" ref={pwRef} id="exampleInputPassword1" placeholder="Password"/> */}
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={getPassword}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        {/* <input type="email" className="form-control" ref={eidRef} id="exampleFormControlInput1" placeholder="Email address"/> */}
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email address" value={email} onChange={getEmail}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Branch</label>
                        {/* <select className="form-select form-select-sm" ref={brRef} aria-label="Small select example"> */}
                        <select className="form-select form-select-sm" value={branch} onChange={getBranch} aria-label="Small select example">
                            <option value="">Select a branch</option>
                            <option value="AIML">AIML</option>
                            <option value="AIDS">AIDS</option>
                            <option value="CSE">CSE</option>
                            <option value="IT">IT</option>
                            <option value="EEE">EEE</option>
                            <option value="ECE">ECE</option>
                            <option value="MECH">MECH</option>
                            <option value="CIVIL">CIVIL</option>                        
                            <option value="CS">CS</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Year</label>
                        {/* <select className="form-select form-select-sm" ref={yrRef} aria-label="Small select example"> */}
                        <select className="form-select form-select-sm" value={year} onChange={getYear} aria-label="Small select example">
                            <option value="">Select a year</option>
                            <option value="I">I</option>
                            <option value="II">II</option>
                            <option value="III">III</option>
                            <option value="IV">IV</option>
                        </select>
                    </div>
                    <div>
                        <div className="form-check form-check-inline">
                            {/* <input className="form-check-input" type="radio" ref={gdRef} name="inlineRadioOptions" id="inlineRadio1" value="1"/> */}
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" onChange={getGender} id="inlineRadio1" value="Male" checked={gender==="Male"}/>
                            <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                        </div>
                        <div className="form-check form-check-inline">
                            {/* <input className="form-check-input" type="radio" ref={gdRef} name="inlineRadioOptions" id="inlineRadio2" value="2"/> */}
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" onChange={getGender} id="inlineRadio2" value="Female" checked={gender==="Female"}/>
                            <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
                        </div>
                        <div className="form-check form-check-inline">
                            {/* <input className="form-check-input" type="radio" ref={gdRef} name="inlineRadioOptions" id="inlineRadio3" value="3"/> */}
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" onChange={getGender} id="inlineRadio3" value="Other" checked={gender==="Other"}/>
                            <label className="form-check-label" htmlFor="inlineRadio3">Other</label>
                        </div>
                    </div>
                    <div style={{ display:"flex",justifyContent:"flex-end"}}>
                        <button type="submit" className="btn btn-primary" onClick={onSubmit}>Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
}