//old JS way 
let doSomething=function(message){
    console.log(message);
}

//Arrow functions
let noParams=()=>{console.log("Jimmy");}
let withParams=(message)=>{console.log(message);}
//If there is one line of code in the method we can also avoid the curly braces
let  noCurlyBraces=(message)=>console.log(message);


let myMethod=(messsage:string)=>console.log(messsage)


//Method calls
noParams();
withParams("Mathew");
noCurlyBraces("Fusion");

myMethod("jimmy");