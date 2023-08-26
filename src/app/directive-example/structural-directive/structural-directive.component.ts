import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.scss']
})
export class StructuralDirectiveComponent implements OnInit {
  isShow: boolean = true;
  DummyData = [
    { "Name": "Ashok" },
    { "Name": "Rahul" },
    { "Name": "Mahipal" },
    { "Name": "Krishna" }
  ];
  constructor() {
    //
   }

  ngOnInit(): void {
    console.log("4.2 Structural Directive Component Loaded.");
  }
}
