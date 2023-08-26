import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {
  EventFiredCount: number = 0;
  KeypressCount: number = 0;

  constructor() { }

  ngOnInit(): void {
    console.log("1.6 Event Binding Component Loaded.");
  }

  //Buttom click event
  ClickedOnButton() {
    this.EventFiredCount = this.EventFiredCount + 1;
  }

  //Key press event on text box
  OnKeypress() {
    this.KeypressCount = this.KeypressCount + 1;
  }
}
