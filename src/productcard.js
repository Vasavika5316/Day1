import {Cart} from './cart.js'
export function ProductCard(props) {
    return (
        <div className="card" style={{ width: "21rem", margin: "1rem" }}>
            <img src={props.image} className="card-img-top" alt={props.title} width={50} height={250} />
            <div className="card-body">
                <h5>{props.title}</h5>
                {/* <p>{props.description}</p> */}
                {/* <p><strong>Category:</strong> {props.category}</p> */}
                <p><strong>Price:</strong> ${props.price}</p>
                <p><strong>Rating:</strong> {props.rating.rate} ({props.rating.count} reviews)</p>
                <Cart
                />
            </div>
        </div>
    );
}