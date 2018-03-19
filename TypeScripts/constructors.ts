class Pointer{
    x:number;
    y:number;
    constructor(x?:number,y?:number)//? indicates that x and y are optional
    {
        this.x=x;
        this.y=y;
    }
    draw(){
        //...
        console.log('X: '+this.x+" "+'Y: '+this.y);
    }
    getDistance(){
        //...
    }
}

let pe=new Pointer();//without initializing the object 
let pa=new Pointer(1,2);//with initializing the object 
pa.draw(); 