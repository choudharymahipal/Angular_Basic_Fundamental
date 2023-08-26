import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.scss']
})
export class ClassBindingComponent implements OnInit {
  ApplyCondition: boolean = true;
  MultipleClasses: string = "Padding10 FontSize20 Border";

  constructor() {
    //
   }

  ngOnInit(): void {
    console.log("1.2 Class Binding Component Loaded.");
  }

  ngClassExample() {
    let myClass = {
      boldClass: true,
      italicsClass: true
    }
    return myClass;
  }
}
