import { useEffect, useState } from "react";
import axios from "axios";
export function UserAxios(){
    const [data,setData]=useState([]);
    useEffect (() =>{
        const fetchMyData = async () =>{
            const res = await axios.get('https://fakestoreapi.com/users')
            console.log(res);
            const resData = await res.data;
            setData(resData);
            console.log(resData);
        }
        fetchMyData();
    },[]);
    return(
        <div>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Id</th>
                    <th scope="col">User name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">City</th>
                    <th scope="col">Zip code</th>
                    {/* <th scope="col">Password</th>
                    <th scope="col">latitude</th>
                    <th scope="col">longitude</th>
                    <th scope="col">H.no</th>
                    <th scope="col">Street</th> */}
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((dataItem,index)=>(
                            <tr key={index}>
                                <td>{dataItem.id}</td>
                                <td>{dataItem.username}</td>
                                <td>{dataItem.phone}</td>
                                <td>{dataItem.name.firstname}</td>
                                <td>{dataItem.name.lastname}</td>
                                <td>{dataItem.email}</td>
                                <td>{dataItem.address.city}</td>
                                <td>{dataItem.address.zipcode}</td>
                                {/* <td>{dataItem.password}</td>
                                <td>{dataItem.address.geolocation.lat}</td>
                                <td>{dataItem.address.geolocation.long}</td>
                                <td>{dataItem.address.number}</td>
                                <td>{dataItem.address.street}</td> */}
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}