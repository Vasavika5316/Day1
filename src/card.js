export function Card(props){
    return(
        <div className="card" style={{width: "23rem"}}>
            <img src="/p1.jpeg" alt="" class="card-img-top"
            width={300}
            style={{border:"1px solid ",borderRadius:"5px"}}
            />
            <div class="card-body">
                <h1>{props.username}</h1>
                <h4>{props.branchname}</h4>
                <h4>{props.idno}</h4>
                <h4>{props.clg}</h4>
                <button type="button" class="btn btn-outline-primary">Connect</button>
            </div>
        </div>
    );
}