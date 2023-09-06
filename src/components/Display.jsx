import { useState } from "react";
function Display(props){

   return(
      
      <>
      <div  className = "personalInfo">
      <h1>Name:{props.name} {props.surname}</h1>
         <h2>email:{props.email}</h2>
         <h2>number:{props.number}</h2>
         </div>
         <div  className = "jobExperience">
         <h2>Job Experience:{props.jobExperience}</h2>
         <h2>Company Name: {props.companyName}</h2>
         <h2>Company Title: {props.companyTitle}</h2>
         <h2>Company Responsibility: {props.companyResponsibility}</h2>
         <h2>Company Date Start: {props.companyDateStart}</h2>
         <h2>Company Date Ends: {props.companyDateEnd}</h2>
         </div>
         <div className = "school">
         <h2>School Name:{props.schoolName}</h2>
         <h2>School Title:{props.schoolTitle}</h2>
         <h2>School Date:{props.schoolDate}</h2>
         </div>
         <button
         className = "disabledButton large"
       onClick= {(e)=>{const input =  document.querySelector(".inputs")
       const editButton = document.querySelector(".disabledButton")
      input.classList.remove("disabled")
      e.target.classList.add("disabledButton")}}
      >Edit</button>
    </>
   )
}
export default Display