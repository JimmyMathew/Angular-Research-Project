interface Point{
x:number,
y:number
}
interface PointWithMethod{
    x:number,
    y:number
    draw: ()=>void//Method signature inside interface with return as void 
    }
let IntMethod = (point : Point)=>{

    console.log(point.x);
    console.log(point.y);
}


//Method call
//IntMethod({x:1,y:2});