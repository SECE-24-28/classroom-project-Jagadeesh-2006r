/*function display()
{
    console.log("Hello da sekar")
    setTimeout(()=>{
        console.log("Print after 2 seconds da")
    },2000)
}

display()
console.log("Program till not finished")*/

//call backmethod

/*function add(show)
{
    istrue=true
    if(istrue)
    {
        show("jaga")//it calls the another method
    }
  console.log("Hello")
}

console.log("Call the another method")

add(display)

function display(name)
{
    console.log("hi i am",name)
}*/

//promise method

let mypromise=new Promise((method1,method2)=>{
    let istrue=true
    if(istrue)
    {
        method1()
    }
    else
    {
        method2()
    }
})
mypromise.then(()=>{console.log("Successfully pass the exam")}).catch(()=>{"unfortunately fai the exam"})

// function pass()
// {
//     console.log("Successfully pass the exam")
// }

// function fail()
// {
//     console.log("unfortunately fail the exam")

// }


/*function display(){
return new Promise((resolve,reject)=>{
    let isTrue=true
    if(isTrue)
    {
      resolve(1000)
    }
    else 
      reject()
  })
  }
   

 display().then((data)=>{ console.log("done!....................",data)})
  .catch(()=>{console.log("not done")} )*/


/*  function display(){
return new Promise((resolve,reject)=>{
    let isTrue=true
    if(isTrue)
    {
      resolve(1000)
    }
    else 
      reject("bye")
  })
  }*/
   

  display().then((data)=>{ console.log("done!....................",data)})
 .catch(()=>{console.log("not done")} )
 
  async function show(){
     try{
      var res= await  display()
      console.log(res)
     }
     catch(Exception){
      console.log("the pb",Exception)
     }
     
  } 
    
  show()
