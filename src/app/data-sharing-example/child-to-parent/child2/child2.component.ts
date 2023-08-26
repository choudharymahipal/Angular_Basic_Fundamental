import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component implements OnInit {
  message = 'Message from child component!';
  @Output() messageEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    //
  }

  sendMessage() {
    this.messageEvent.emit(this.message);
  }
}
