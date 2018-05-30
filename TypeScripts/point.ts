//Module example
export class PointerModule{
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