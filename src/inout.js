// import { useState } from "react";
// export function Inout(){
//     const [inputValue, setInputValue] = useState("");
//     const [review, setReview] = useState("");
//     const inputValueChange = (event) =>{
//         console.log("Input changed...")
//         console.log(event.target.value);
//         setInputValue(event.target.value);
//     }
//     const addReview = () =>{
//         console.log("Adding Review...");
//         setReview(inputValue); 
//         setInputValue(""); 
//     }
//     return(
//         <div >
//             <input type='text' placeholder="Enter review" onChange={inputValueChange} value={inputValue}></input>
//             <button type="button" className="btn btn-success" onClick={addReview}>Submit</button>
//             <div>
//                 <p>{review}</p>
//             </div>
//         </div>
//     );
// }
import { useState } from "react";
export function Inout(){
    const username="Agir"
    const [inputValue, setInputValue] = useState("");
    const [reviews, setReview] = useState([]);
    const inputValueChange = (event) =>{
        // console.log("Input changed...")
        // console.log(event.target.value);
        setInputValue(event.target.value);
    }
    const addReview = () =>{
        // console.log("Adding Review...");
        if (inputValue.trim() !== "") {
            setReview([...reviews, inputValue]);
            setInputValue(""); 
        }
    }
    return(
        <div >
            <input type='text' placeholder="Type to review" onChange={inputValueChange} value={inputValue} style={{width:'1300', marginRight: '10px'}}></input>
            <button type="button" className="btn btn-success" onClick={addReview}>Add Review</button>
            <div>
            {reviews.map((review, index) => (
                <div>
                    <h5 key={index} ><b>{username}</b></h5>
                    <h6>{review}</h6>
                </div>
                ))}

            </div>
        </div>
    );
}