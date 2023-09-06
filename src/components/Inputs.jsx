import { useState } from "react";
import Display from "./Display";
export default function Input() {
    //
     const [person, setValue] = useState({name:'John',surname:'Doe',email:'johndoe@gmail.com',
     number:'2391234321',jobExperience:"NEET",companyName:"Odin Project",companyTitle:"CEO",
     companyResponsibility:"Pat Cats",companyDateStart:"25.12.2023",companyDateEnd:"4.20.2024",
     schoolName:"MIT",
     schoolTitle:"Bachelors of Computer Science",schoolDate:"23.10.2019",});
     //not maintenable
     
    const changeName = (e)=>{
       const newPerson = {...person, name:e.target.value}
       setValue(newPerson)
    }
    const changeSurname = (e)=>{
       const newPerson = {...person, surname:e.target.value}
       setValue(newPerson)
    }
    const changeEmail = (e)=>{
       const newPerson = {...person, email:e.target.value}
       setValue(newPerson)
    }
    const changeNumber = (e)=>{
       const newPerson = {...person, number:e.target.value}
       setValue(newPerson)
    }
    const changeExperience = (e)=>{
       const newPerson =  {...person, jobExperience:e.target.value}
       setValue(newPerson)
    }
    const changeSchoolName = (e)=>{
       const newPerson =  {...person, schoolName:e.target.value}
       setValue(newPerson)
    }
    const changeSchoolDate = (e)=>{
       const newPerson =  {...person, schoolDate:e.target.value}
       setValue(newPerson)
    }
    const changeSchoolTitle = (e)=>{
       const newPerson =  {...person, schoolTitle:e.target.value}
       setValue(newPerson)
    }
    const changeCName = (e)=>{
       const newPerson =  {...person, companyName:e.target.value}
       setValue(newPerson)
    }
    const changeCTitle= (e)=>{
       const newPerson =  {...person, companyTitle:e.target.value}
       setValue(newPerson)
    }
    const changeCResponsibility = (e)=>{
       const newPerson =  {...person, companyResponsibility:e.target.value}
       setValue(newPerson)
    }
    const changeCDateStart = (e)=>{
       const newPerson =  {...person, companyDateStart:e.target.value}
       setValue(newPerson)
    }
    const changeCDateEnd = (e)=>{
       const newPerson =  {...person, companyDateEnd:e.target.value}
       setValue(newPerson)
    }
     return (
         <div className ="container">
         <div className = "inputs">
         <label className = "inputField" >
             Name
        <input
           type="text"
           value={person.name}
           onChange={changeName}
 
        /></label >
        <label className = "inputField">
             Surname
        <input
           type="text"
           value={person.surname}
           onChange={changeSurname}
        />
        </label >
        <label className = "inputField">
          Email
        <input
           type="text"
           value={person.email}
           onChange={changeEmail}
        /></label >
        <label className = "inputField">
          Number
        <input
           type="number"
           value={person.number}
           onChange={changeNumber}
        /></label >
        <label className = "inputField">
             Job Experience
        <input
           type="text"
           value={person.jobExperience}
           onChange={changeExperience}
 
        /></label>
        <label className = "inputField">
          Company Name
         <input
           type="text"
           value={person.schoolDate}
           onChange={changeCName}
 
        /></label>
        <label className = "inputField">
          Company Title
         <input
           type="text"
           value={person.schoolDate}
           onChange={changeCTitle}
 
        /></label>
        <label className = "inputField">
          Company Responsibility
         <textarea
           type="text"
           value={person.companyResponsibility}
           onChange={changeCResponsibility}
           className="responsibility"
        /></label >
        <label className = "inputField">
             Company Date Start
        <input
           type="text"
           value={person.companyDateStart}
           onChange={changeCDateStart}
 
        /></label >
        <label className = "inputField">
             Company Date End
        <input
           type="text"
           value={person.companyDateEnd}
           onChange={changeCDateEnd}
 
        /></label>
        <label className = "inputField">
             School
        <input
           type="text"
           value={person.schoolName}
           onChange={changeSchoolName}
 
        /></label >
        <label className = "inputField">
           School Title
        <input
           type="text"
           value={person.schoolTitle}
           onChange={changeSchoolTitle}
 
        /></label >
        <label className = "inputField">
          School Date
         <input
           type="text"
           value={person.schoolDate}
           onChange={changeSchoolDate}
 
        /></label >
        <button
        onClick= {()=>{const input =  document.querySelector(".inputs")
        const editButton = document.querySelector(".disabledButton")
       input.classList.add("disabled")
    editButton.classList.remove("disabledButton")}}
       >Save</button>
       
        </div>
        <div className = "display">
        <Display
        name={person.name}
        surname = {person.surname}
        email = {person.email}
        number = {person.number}
        jobExperience={person.jobExperience}
        companyName = {person.companyName}
        companyTitle = {person.companyTitle}
        companyResponsibility = {person.companyResponsibility}
        companyDateStart = {person.companyDateStart}
        companyDateEnd = {person.companyDateEnd}
        schoolName = {person.schoolName}
        schoolTitle = {person.schoolTitle}
        schoolDate = {person.schoolDate}/>
         </div>
         </div>
     );
}