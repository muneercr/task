import React from "react";

class Demo extends React.Component{
    constructor(){
        super()
        this.state={
            textdata:"nothing"
        }
    }


    text=(e)=>{
       this.setState({textdata: e.target.value})
    }


    render(){
      return(
        <div>
        <label htmlFor="">Hello 
            <input onChange={this.text} type="text" /></label>
            <br/>
 
        <h3>{this.state.textdata}</h3>


      </div>

      
      )
    }
}export default Demo;