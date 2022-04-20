import React from "react";

class Find extends React.Component{
  constructor(){
      super()
     this.stare ={
         text:"sdfggf"
    }
  }


    get=(e)=>{
       this.text=e.terget.value
       
    }

    render(){
        return(
          <div>
              <input onKeyUp={this.get} type="text" />
              <h3>{this.text}</h3>
          </div>
        )
    }
}export default Find;