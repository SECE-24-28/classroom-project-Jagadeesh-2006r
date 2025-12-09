import { useRef, useState } from "react"

 

 

const Display2=()=>{
    const [name,setName]=useState("")
    const input=useRef()
    const view=()=>{
        console.log("the data is: ",input.current.value)
        setName(input.current.value)
    }
      return(
        <>
        <h1>im from dis3 {name}</h1>
        
        <input type="text" ref={input}></input>
        <button onClick={view}>click</button>
        </>
          )
}
export default Display2