/*a=[12,34,45]
result= a.length
console.log(result)


a=[12,34,45]
result= a.push(160,89)
console.log('the result',result)
console.log('the arr is',a)


a=[12,34,45]
result= a.unshift(100,90)    
console.log('the result',result)
console.log('the arr is',a)


a=[12,34,45]
result= a.pop()
console.log('the result',result)
console.log('the arr is',a)


a=[12,34,45]
result= a.shift()
console.log('the result',result)
console.log('the arr is',a)*/



let arr =[12,23,34,456,76]
for (let a in arr)
console.log(a)
console.log("im outside")


//methods
//with argument with return 
function add(a,b)
{
    let c=a+b;
    console.log("Hello")
    return c;
}
let ans=add(10,10)
console.log("Finished",ans)

//without argument without return
function display()
{
    console.log("Hello")

} 
display()
console.log("success")

//with argument without return 
function sub(a,b)
{
  let c=a-b;
  console.log("hello")
}
sub(10,5)
console.log("done")

//without argument with return 
function mul()
{
    console.log("multiplication")
    return 100
}
let result=mul()
console.log("mul success",result)
//------------------------------------------------


//arrow function
//without argument
let a=()=>{console.log("hello")}

add()
console.log("finish")

//with argument with return 
let b=(a,b)=>{
    let c= a+b;
    return c;
}
let ba= b(10,10)
console.log("finish",ba)

//with argument without return
let c=(a,b)=>c=a+b

let ca=c(1,2)
console.log(ca)

//without return without argument
let d=()=> 10
let res = d()
console.log(res)

a=[10,20,30,40,50]
// arr=[]
// for(var i=0;i<a.length;i++)
// {
//     arr.push(a[i]*2)
// }
// console.log(arr)

var j=a.map((d)=> {return d*2})
console.log(j)

a=["jaga","adhesh","sekar","kishore"]
// arr = []
// for(var i=0;i<a.length;i++)
// {
//     var z=a[i].toUpperCase()
//     arr.push(z)
// }
// console.log(arr)

var ja=a.map((d)=> 
    d.toUpperCase()
)
console.log(ja)

