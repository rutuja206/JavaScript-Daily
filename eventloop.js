console.log("hii1");

function helllo() {
    console.log("hello world")
}

// for(let i = 0; i<= 4; i++) {
//     console.log(i)
// }

helllo();
console.log("hii2")

//code running line by line is synchronous code

debugger
setTimeout(()=>{
    console.log("1")
})

//callback queue in which all webapi function are store
//event llop checks call stack and callback queue if there call stack is empty and there is something to run in callback queue
