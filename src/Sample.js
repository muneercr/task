import React from "react";

class Sample extends React.Component{
    constructor(){
        super()
        this.state={
        text:"type something" 
    }
    
    }

    textContent=(e)=>{

       this.setState({text:e.target.value})

    }


    render(){
        return(
        <div>
            <label htmlFor="">text something</label>
            <input onChange={this.textContent} type="text" />

            <h3 >{this.state.text}</h3>
        </div>)
    }

}export default Sample;