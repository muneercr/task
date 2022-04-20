import React from "react";


class Search extends React.Component{

    array=['apple','orange','banana']
    filter_text=''
    constructor(props){
        super(props)
        this.state={
            // arr:["apple","orange","banana","grape"],
          found:"false"
             

        }

        
    }        
    
    searchKey=()=>{
     if(this.filter_text){

         if(this.array.find(x=> x==this.filter_text)) {
        return this.addValue;
         }
        
     }
    }
        
    getvalue=(e)=>{

        console.log(this.filter_text)
        this.filter_text=e.target.value
        }

     addValue=()=>{
         this.setState({found:"true"})
     }
    

render(){
    return(
        <div>
            <div  id="SearchDiv">
                <input onChange={this.getvalue} type="text" />
                <button onClick={this.searchKey}>SEARCH</button><br />
                <h3>{this.state.text}</h3><br />
                 <h4>{this.state.found}</h4> 
            </div>
        </div>
    )

}}export default Search;