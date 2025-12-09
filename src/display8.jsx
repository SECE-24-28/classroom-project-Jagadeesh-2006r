import { useState } from "react";

const Display7=()=>{
    
     const[student,setStudent]= useState({
        username:"",
        email:""
     })


const formSubmit=(e)=>{
    e.preventDefault()
    console.log(student.username, student.email)
}

     const change=(e)=>{

setStudent((prev)=>{
return ({...prev,
    [e.target.name]:e.target.value, [e.target.name]:e.target.value
})
})
}
    return(
        <>
        <form onSubmit={formSubmit}>
        <h1>im from disp7 {student.username} {student.email}</h1>
        <input onChange={change} name="username" value={student.username}></input>
        
        <input onChange={change} name="email" value={student.email}></input> 
 
         <input type="submit"  value="click!!!!!"></input>

       </form>
        </>
    )
}
export default Display7;