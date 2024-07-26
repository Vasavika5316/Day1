import { useContext,useState} from "react";
import { GlobalContext } from "./App";
import { Navigation } from "./Navigation";
import { useNavigate } from 'react-router-dom';
export function Profile(){
    const [showPassword, setShowPassword] = useState(false);
    const {globalProfile}=useContext(GlobalContext);
    const {setGlobalLogin}=useContext(GlobalContext);
    const navigate = useNavigate();
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const onLogout = () =>{
        setGlobalLogin(false);
        navigate('/');
    }
    return (
        <div>
            <Navigation/>
            <div style={{display: 'flex', justifyContent:'center',marginTop:"60"}}>
                <div className="card" style={{border:'1px solid black',width: "18rem",display: 'flex', flexDirection: 'column', alignItems: 'left',paddingLeft:'20'}}>
                    <h1>Profile</h1>
                    <p>Your details</p>
                    <p>College Id</p>
                    <b>{globalProfile.collegeId}</b>

                    <p>Password</p>
                    <b>
                        {showPassword ? globalProfile.password : '••••••••'}
                        <u style={{ cursor: 'pointer' }} onClick={togglePasswordVisibility}>
                            {showPassword ? ' Hide' : ' Show'}
                        </u>
                    </b>

                    <p>Email address</p>
                    <b>{globalProfile.email}</b>

                    <p>Branch</p>
                    <b>{globalProfile.branch}</b>

                    <p>Year</p>
                    <b>{globalProfile.year}</b>

                    <p>Gender</p>
                    <b>{globalProfile.gender}</b><br/>
                    {/* <button type="submit" className="btn btn-primary"  onClick={onLogout}>Logout</button> */}
                    <div style={{ display:"flex",justifyContent:"flex-end"}}>
                        <button type="submit" className="btn btn-primary"  onClick={onLogout}>Logout</button>
                    </div>
                </div>    
            </div>
        </div>
        // <div>khgfc</div>
    );
}