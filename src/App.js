import React from 'react';
import FormOne from './Form';
import Hel from './Hello';
import './App.css'
import Message from './Message'
import Counter from './Counter'
import Demo from './Demo';
import Sample from './Sample';
import Search from './Search';
import Find from './Find';
import Task from './Task';
import Tudut from './Todut';
import Revarse from './Revarse';
import QsTask from './QsTask';



function App() {
 
  return (
  
  <div>
    <QsTask/>
     <Revarse/>
    <Tudut/>
    <Task/>
    <Find/>
    <Search/>
   
    <Sample/>
    <Demo/>
    <Message/>
    <Counter/>
    <Hel name="teacher"/>
    <FormOne/>
    <Message name="Student" />
    <Hel name="student"/>
    <FormOne/> 
   
  </div>
    
    

  );
}

export default App;
