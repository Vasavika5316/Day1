export function Review(){
    const reviews = [
        {
            name: "Reviewer 1",
            text: "This product is good.",
            image: "./person.png" 
        },
        {
            name: "Reviewer 2",
            text: "This product is not great.",
            image: "./person.png" 
        }
    ];
    return(
        <div>
            <h1>Reviews</h1>
            {reviews.map((review, index) => (
                <div className="review-item" key={index}>
                {review.image && (
                    <img
                        src={review.image}
                        alt="Reviewer"
                        className="review-img"
                    />
                )}
                <div className="review-content">
                    <h2>{review.name}</h2>
                    <h3>{review.text}</h3>
                </div>
                </div>
            ))} 
        </div>
    );
}