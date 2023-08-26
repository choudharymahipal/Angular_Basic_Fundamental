import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.scss']
})
export class TwoWayBindingComponent implements OnInit{
  Interpolation_Text: string = "This is interpolation text";
  TwoWayText: string = "default text";

  constructor() { }

  ngOnInit(): void {
    console.log("1.4 Two way Binding Component Loaded.");
  }

  keyUp(value: any) {
    this.TwoWayText = value;
  }
}
