import { useEffect, useState } from "react";
import axios from "axios";
export function FetchingUsingAxios(){
    const [data,setData]=useState([]);
    useEffect (() =>{
        const fetchMyData = async () =>{
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
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
                    <th scope="col">UserId</th>
                    <th scope="col">Title</th>
                    <th scope="col">Body</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((dataItem,index)=>(
                            <tr key={index}>
                                <td>{dataItem.id}</td>
                                <td>{dataItem.userId}</td>
                                <td>{dataItem.title}</td>
                                <td>{dataItem.body}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}