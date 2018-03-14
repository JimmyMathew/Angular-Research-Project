class Point{
    x:number;
    y:number;
    draw(){
        //...
        console.log('X: '+this.x+" "+'Y: '+this.y);
    }
    getDistance(){
        //...
    }
}

let p=new Point();//initializing the object 
p.x=1;
p.y=2;
p.draw();