import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directive',
  templateUrl: './attribute-directive.component.html',
  styleUrls: ['./attribute-directive.component.scss']
})
export class AttributeDirectiveComponent implements OnInit {
  TextColor: string = "Green";

  constructor() { }

  ngOnInit(): void {
    console.log("4.3 Attribute directive Component Loaded.");
  }
}
