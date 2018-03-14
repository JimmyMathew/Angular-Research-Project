let abc;
abc='sam';
let end= (<string>abc).endsWith('m');
//or
let endAnotherWay= (abc as string).endsWith('m');
console.log(end);
console.log(endAnotherWay);