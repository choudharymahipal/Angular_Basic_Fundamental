import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.scss']
})
export class StyleBindingComponent implements OnInit{
  bgColor:string="orange";
  multiStyle:string="font-size:20px;color:#fff;background-color:green;";

  constructor() { }

  ngOnInit(): void {
    console.log("1.1 Style Binding Component Loaded.");
  }
}
