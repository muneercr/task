import React  from "react";

class Counter extends React.Component{

constructor(props){
    super(props)
   this.state={
    counter:0
   }
}

count(){
    setTimeout(()=>{
        this.setState((prev,props)=>({counter:prev.counter+1}));
    },1000
    )
}

render(){
    this.count();
  return(
    <div>
       <h1>{this.state.counter}</h1>
    </div>
  )
}



}export default Counter;