import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-to-child',
  templateUrl: './parent-to-child.component.html',
  styleUrls: ['./parent-to-child.component.scss']
})
export class ParentToChildComponent implements OnInit {
  message: string = "";
  ParentMsg: string = "This message from parent component";

  constructor() { }

  ngOnInit(): void {
    console.log("2.1 Parent to child Component Loaded.");
  }

  sendMessage() {
    this.message = this.ParentMsg;
  }
}
