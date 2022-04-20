import React from "react";
import './App.css';

function FormOne(){

    return(
    <div className="container">
     
    <div className="formDiv">
 <div class="formClass"><form>
 <div class="form-group">
   <label className='label' for="exampleInputEmail1">Name</label>
   <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name "/>
 </div>
 
 
 <div class="form-group">
   <label className='label' for="exampleInputEmail1">number </label>
   <input type="tel" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter number"/>
 </div>

 <div class="form-group">
   <label className='label' for="exampleInputEmail1">Email address</label>
   <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
 </div>


 
 
</form></div>
</div>

</div>
    )
}export default FormOne;