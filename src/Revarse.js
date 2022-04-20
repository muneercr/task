import React, { useState } from "react";

function Revarse(){

    const [name, setName] = useState('my name is muneer');
   



    console.log(name)

  
    setName(name.split(" ").map(word => word.split("").reverse().join()))
    console.log(name)
    
    return(
        <div>

            <div>
                  <h4>{name}</h4>
                

            
            </div>
        </div>
    )
}export default Revarse