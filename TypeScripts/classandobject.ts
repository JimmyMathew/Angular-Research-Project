class Paintclass{
     x:number;
     y:number;

    doSomething(){
        console.log(this.x);
        console.log(this.y);
       console.log("test");
   }

}

let paintObj=new Paintclass();
paintObj.x=5;
paintObj.y=6;

paintObj.doSomething();
