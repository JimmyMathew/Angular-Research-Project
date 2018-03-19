import{ PointerModule} from './point'
class Pointerspeed{
   private x:number;
   private y:number;
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


let pet=new Pointerspeed();//without initializing the object 
let pal=new Pointerspeed(1,2);//with initializing the object 
pet.draw(); 

//We can also minimize the class code like shown below
class Prettypointer{
    constructor(private x?:number,y?:number){
        //automatically initializes. So there is no need for this and initialize it again
    }
    get X(){// This can be used to get the value of x and display it to user
        return this.x;
    }
    set X(value){// This can be used to set the value of x at a later point of time 
    if(value < 0)
    throw new console.error('Value cannot be less that 0');
    else
    this.x=value;
}
}

//Now
let pret= new Prettypointer(1,2);
console.log(pret.X);
//pret.X=-5;// To throw an exception
pret.X=8;//Legit value

//We are using this from another module
let pm=new PointerModule();
pm.X=5;
