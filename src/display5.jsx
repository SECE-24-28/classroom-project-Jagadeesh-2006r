import { useState } from "react"

const Display5=()=>{

    const[data,setData]=useState(["one","two"])
      const[count,setCount]=useState(10)
 
    function addItem(){
        var item=count
        setData((pre)=>{
            return([...pre,item])
        })
setCount((t)=>{
return(t+1)
})

    }
    return(
    <>
    <h1>im from Disp5</h1>
    <button onClick={addItem}>add</button>
     <ul>
        {
            data.map((d)=>{
                    return (<li>{d}</li>)
            })
        }
     </ul>
     
    </>
)

}

export default Display5