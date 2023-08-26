import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss']
})
export class PropertyBindingComponent implements OnInit{
  isDisabled: boolean = true;
  imgUrl: string = "./assets/dist/img/default-150x150.png";

  constructor() { }

  ngOnInit(): void {
    console.log("1.3 Property Binding Component Loaded.");
  }
}
