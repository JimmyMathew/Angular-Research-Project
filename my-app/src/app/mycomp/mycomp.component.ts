import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycomp',
  templateUrl: './mycomp.component.html',
  styleUrls: ['./mycomp.component.css']
})
export class MycompComponent  {

  constructor() { }

  ngOnInit() {
  
  }
  testData:string="jimmy";

  testMethod(){
    return this.testData;
  }
}
