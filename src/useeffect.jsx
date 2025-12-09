import { useEffect, useState } from "react"

const Display4=()=>{
    const [data,setData]=useState(100)
   useEffect(()=>{
console.log("hello",{data} )
   })
    return(
        <>
        <h1>im from display 4</h1>
        <h2>the data : {data}</h2>
<button onClick={()=>{
    setData((t)=>t=t+1)
}}>increment</button>
        </>
    )
}
export default Display4