import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
 dt: string;

  constructor() { }

  ngOnInit() {
  }
  onOkay()
  // tslint:disable-next-line:one-line
  {
    this.dt = new Date().toString();
  }

}
