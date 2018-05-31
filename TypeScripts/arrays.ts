//var array_name[:datatype];        //declaration 
//array_name = [val1,val2,valn..]   //initialization


//Simple array 
var alphas:string[]; 
alphas = ["1","2","3","4"] 
console.log(alphas[0]); 
console.log(alphas[1]);

//Array object 
var arr_names:number[] = new Array(4)  

for(var i = 0;i<arr_names.length;i++) { 
   arr_names[i] = i * 2 
   console.log(arr_names[i]) 
}

//Array traversal
var j;
var nums:number[] = [1001,1002,1003,1004] 

for(j in nums) { 
   console.log(nums[j]) 
} 

//Tuples - values of varied types
var mytuple = [10,"Hello"]; //create a  tuple 
console.log(mytuple[0]) 
console.log(mytuple[1])