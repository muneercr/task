import React, { useState } from "react";


function QsTask(){
    
     const [submit, setSubmit] = useState(['']);
     const [currectans, setcurrectans] = useState(0);
     const [wrongans, setwrongans] = useState(0);
    const  [questions,setQuestions]= useState([
        {"id":1 ,  "qs":'who is the prime minister of india ?', "ans":"2","user_answer":'',"radio_name":"name1",  "options":[{   "id":1,"option_name":"rahulgandhi"},{"id":2,"option_name":"nerendhra modi"},{"id":3,"option_name":"pinarayi vijayan"}]},
        {"id":2,  "qs":'react is a ..', "ans":'3',"user_answer":'',"radio_name":"name2",  "options":[{ "id":1,"option_name":"frame work"},{"id":2,"option_name":"language"},{"id":3,"option_name":"library"}  ]   },
        {"id":3,  "qs":'2018 fifa worldcup winners is', "ans":'3',"user_answer":'', "radio_name":"name3",  "options":[{ "id":1,"option_name":"germany"},{"id":2,"option_name":"brazil"},{"id":3,"option_name":"france"}  ]   },
        {"id":4,  "qs":'who isthe father of our nation?', "ans":'1',"user_answer":'',"radio_name":"name4",  "options":[{ "id":1,"option_name":"Gandhi"},{"id":2,"option_name":"nehru"},{"id":3,"option_name":"modi"}  ]   },
        {"id":5,  "qs":'brain of computer is...', "ans":'2',"user_answer":'', "radio_name":"name5",  "options":[{ "id":1,"option_name":"keyboard"},{"id":2,"option_name":"cpu"},{"id":3,"option_name":"mouse"}  ]   },
        {"id":6,  "qs":'which is the longest rever in world ', "ans":'1',"user_answer":'', "radio_name":"name6",  "options":[{ "id":1,"option_name":"nile"},{"id":2,"option_name":"ganga"},{"id":3,"option_name":"amazon"}  ]   },
        {"id":7,  "qs":'smallest state in india', "ans":'3',"radio_name":"name7","user_answer":'',  "options":[{ "id":1,"option_name":"kerala"},{"id":2,"option_name":"beehar"},{"id":3,"option_name":"goa"}  ]   },
        {"id":8,  "qs":'fastest animal on erth is?', "ans":'3',"radio_name":"name8","user_answer":'',  "options":[{ "id":1,"option_name":"lion"},{"id":2,"option_name":"tiger"},{"id":3,"option_name":"cheetah"}  ]   },
        {"id":9,  "qs":'national animal of india', "ans":'1',"radio_name":"name9",  "options":[{ "id":1,"option_name":"tiger"},{"id":2,"option_name":"lion"},{"id":3,"option_name":"cheetah"}  ]   },
        {"id":10,  "qs":'how many playrs are there in football team?', "ans":'2',"radio_name":"name10","user_answer":'',  "options":[{ "id":1,"option_name":"7"},{"id":2,"option_name":"11"},{"id":3,"option_name":"9"}  ]   }]);
    
        
        const submitAnswer=()=>{
            var correct=0
            var wrong=0

           questions.map((item)=>{
             if(item.user_answer==item.ans){
                 correct=correct+1
                 
                setcurrectans({currectans : correct})
             }else{
                 wrong=wrong+1
                 
                 setwrongans({wrongans : wrong})
             }
             
           
           })
           console.log(currectans)
           console.log(wrongans)
        }

        const  changeRangeName=(element,e)=> {
            let index=questions.findIndex(x=>x.id == element)
        var data=[...questions];
        data[index].user_answer=e.target.value
        setQuestions([...data]);
 
          }
        

        const selected=(opt)=>{
        setSubmit(opt)
        console.log(opt)

         }

         
                              
    return(
        
        <div className="Qcontainer">

            {
                questions.map((Element,key)=>{
                   
                    return(
                        <div>
                            <h1>{key+1}:{Element.qs}</h1>

                                  
                            {Element.options.map((item,idx)=>{
                            
                                return(
                                   <label htmlFor="">{idx+1}{item.option_name} <input 
                           onClick={()=>{selected(item.option_name)}} value={item.id} type="radio" name={Element.radio_name}  onChange={(e) => changeRangeName(Element.id, e)}/>   </label>
                                )
                            }

                            )}

                        </div>
                    )
                })
            }
                 <button onClick={submitAnswer} type="submit"> submit</button>
   
        </div>
    )
                }export default QsTask;