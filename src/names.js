export function Names(){
    const names=["abc","def","ghi","jkl"];
    return(
        <div>
            {
                names.map((name,index)=>(
                    <div key={index}>{name}</div>
                ))
            }
        </div>
    );
}