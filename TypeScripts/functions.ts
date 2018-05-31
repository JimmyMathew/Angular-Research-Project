//optional parameters 
function disp_details(id:number,name:string,mail_id?:string) { 
    console.log("ID:", id); 
    console.log("Name",name); 
    
    if(mail_id!=undefined)  
    console.log("Email Id",mail_id); 
 }
 disp_details(123,"John");
 disp_details(111,"mary","mary@xyz.com");//optional call
 
//  Default parameters
// function function_name(param1[:type],param2[:type] = default_value) { 
// }

 
//Rest  parameters
function addNumbers(...nums:number[]) {  
   var i;   
   var sum:number = 0; 
   
   for(i = 0;i<nums.length;i++) { 
      sum = sum + nums[i]; 
   } 
   console.log("sum of the numbers",sum) 
} 
addNumbers(1,2,3) 

//Anonymous function 
var msg = function() { 
    return "hello world";  
 } 

//Anonymous functions with parameters
var res = function(a:number,b:number) { 
    return a*b;  
 }; 
 
 
