import { Component, OnInit, style } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector:'[app-server]',
  // templateUrl: './servers.component.html',
  // styleUrls: ['./servers.component.css'],
  template: `<app-server></app-server>
  <app-server></app-server>
  <h1>Inline template</h1>
  `,
  styles: [`
    h1{
    color:blue;
    }
  `]
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
