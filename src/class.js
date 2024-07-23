import React from "react"
export class Classc extends React.Component{
    nm="adh"
    n=3;
    constructor(){
        super();
        this.state = {
            number:1
        }
        console.log("Constructor is called.")
    }
    componentDidMount(){
        console.log("Mounted")
        console.log(this.n)
    }
    componentDidUpdate(){
        console.log("updated")
    }
    componentWillUnmount(){
        console.log("Unmounted")
    }
    funcbtnclk = () =>{
        this.n+=1
        console.log("Button clicked")
        console.log(this.n)
        this.setState({number:this.state.number+2})
    }
    render(){
        return(
            <div>
                <h3>This is class component and num is {this.n} and name is {this.nm} {this.state.number}</h3>
                <button type="button" className="btn btn-outline-primary" onClick={this.funcbtnclk}>Click</button>
            </div>
        );
    }
}