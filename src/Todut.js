import { getValue } from "@testing-library/user-event/dist/utils";
import React, { useEffect, useState } from "react";
 
function Tudut(){

     const [value, setvalue] = useState([""]);
     
     const [getTex, setgetTex] = useState('');

    const text=(e)=>{
        setvalue=e.target.value 
        console.log(setvalue)
    }

   const addData=()=>{
     setvalue([...value,getTex])
    
       
    }
    const change=(e)=>{
     setgetTex(e.target.value)
     console.log(getTex)

    }

    const onDelete=(k)=>{
 
 setvalue(value.splice(k,1,));
 console.log(value)
        
 
    

    }


    return(
        <div>
            <div className="tuduDiv">
                <input onChange={change} placeholder="enter your name" type="text" /><button onClick={addData}>Add</button>
                <div> <ul>  {value.map((a,k) => ( <li>{a} <button onClick={()=>{onDelete(k)}}>Delete</button></li> ))}
                    </ul> </div> 
                    <p>{getTex}</p>
            </div>
        </div>
    )
}export default Tudut