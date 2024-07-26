export function Review(){
    const reviews = [
        {
            name: "Reviewer 1",
            text: "This product is good.",
            image: "./person_logo.png" 
        },
        {
            name: "Reviewer 2",
            text: "This product is not great.",
            image: "./person_logo.png" 
        }
    ];
    return(
        <div>
            <h1>Reviews</h1>
            {reviews.map((review, index) => (
                <div style={{display: "flex",alignItems:"center",marginBottom:"10px"}} key={index}>
                {review.image && (
                    <img
                        src={review.image}
                        alt="Reviewer"
                        style={{width:"50px",height:"50px",marginRight:"20px"}}
                    />
                )}
                <div style={{display:"flex",flexDirection:"column"}}>
                    <h2>{review.name}</h2>
                    <h3>{review.text}</h3>
                </div>
                </div>
            ))} 
        </div>
    );
}
