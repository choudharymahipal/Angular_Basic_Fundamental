import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-to-parent',
  templateUrl: './child-to-parent.component.html',
  styleUrls: ['./child-to-parent.component.scss']
})
export class ChildToParentComponent implements OnInit {
  message!: string;

  constructor() { }

  ngOnInit(): void {
    console.log("2.2 Child to Parent Component Loaded.");
  }

  receiveMessage($event: any) {
    this.message = $event;
  }
}
