import React, { useState } from "react";
import './App.css';

function Tasktable(){
    
const [arryType, setarryType] = useState('');
const [filterText, setfilterText] = useState('');
const [array1, setarray1] = useState(["abc","def","hig"]);
const [array2, setarray2] = useState([">","<",">>","<<"]);
const [array3, setarray3] = useState(["klm","opq","rst"]);


    
  const addText=(a,type)=>{
        setarryType(type)
        setfilterText(a)
    }

    const  action=(b)=>{
        switch(b) {
            case '>':
             if(arryType =='array1'){
                 let index =array1.findIndex(x=>x == filterText)
                 setarray3([...array3,array1[index]])
                 console.log(array3,array1)
                //  setarray1([...array1,array1.splice(index,1)])
                 ([array1.splice(index,1)])
           
             }
            case '<':
                 if(arryType=='array3'){
                   let index=array3.findIndex(x=>x==filterText)
                   setarray1([...array1,array3[index]])
                    array3.splice(index,1)
                 
                 }break

              case '>>':

              setarray3([...array3,...array1])
               array1.length =0
               break
        
             

               case '<<':
                 setarray1([...array1,...array3])
                 array3.length=0
                }


              

             
            
           
    
        


    }
  const  addTextB=(c,type)=>{
        setarryType(type)
        setfilterText(c)
    }



    
   

 

       
       
        return (  
            <div className="container">  

         
                 
                  <div className="table"> <ul>  {array1.map((a) => ( <li onClick={() => addText(a,'array1')}>{a}</li> ))}
                    </ul> </div> 

                 <div className="table">  <ul cl>    {array2.map((b) => ( <li onClick={()=>action(b)} >{b}</li> ))}</ul>  </div>

             <div className="table"><ul cl>    {array3.map((c) => ( <li onClick={()=>addTextB(c,'array3')}>{c}</li> ))}</ul> </div>
            </div>  
          );  

}export default Tasktable