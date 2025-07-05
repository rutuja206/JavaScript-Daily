//settimeout takes any argument as js code 
//it will find in the code where this hii variable exists and then it will give error

// const hii = "hello"
// setTimeout("hii") // trating hii as a variable

setTimeout("console.log(true)") // taking this code printing true in the console
//we can tell Settimeout after how many sec we are printing the code
// fitst param - js code
// 2nd param - time

setTimeout("console.log('rutu')",2000)

// return value 
//returns id of timer
//with the help of clearTimeout we are clearing the setitmeout and we can pass the id in the  argument

// setTimeout(a(),2000,'lsj',99,[1,7]);

// function a() {
//     console.log("Hello")
// }

//common way 
setTimeout(()=>{
 console.log("object")
})

console.log("called fn")
 