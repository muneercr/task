import React from "react";

class Message extends React.Component{
    constructor(props){
    super(props)
        this.state={
            Message:"welcome to superstar muneer home"
        }
}

newMessage(){
this.setState({
    Message:"superstar muneer waiting for you"
})
}



render(){

    return(
    <div>
        <h1 id="welcomeId">{this.state.Message}</h1>
        <div id="buttonDiv">
        <button id="buttonId" onClick={()=>this.newMessage()}>click</button>
        </div>
    </div>
    )

}
} export default Message;