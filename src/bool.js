export function Bool(){
    let a=false;
    return(
        <div>
            {a?"a is true":<h5>a is false</h5>}
        </div>
    );
    // if (a){
    //     return <div><h3>a is true</h3><h3>if is executed</h3></div>
    // }else{
    //     return <div><h3>a is true</h3><h3>else is executed </h3></div>
    // }

}