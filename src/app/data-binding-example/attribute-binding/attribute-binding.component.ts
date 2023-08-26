import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-binding',
  templateUrl: './attribute-binding.component.html',
  styleUrls: ['./attribute-binding.component.scss']
})
export class AttributeBindingComponent implements OnInit {
  LabelText: string = "This is simple label";

  constructor() { }

  ngOnInit(): void {
    console.log("1.5 Attribute Binding Component Loaded.");
  }
}
