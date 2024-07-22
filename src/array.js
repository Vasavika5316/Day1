export function Array(){
    const fruits = ["Apple", "Banana", "Orange"];
    // const fruitsList=fruits.map((fruit, index) => (<li key={index}>{fruit}</li>))
    return (
        <div>
            <h1>Fruits</h1>
            {/* <ul>{fruitsList}</ul> */}
            <ul>
                {fruits.map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))} 
            </ul>
        </div>
    );
}