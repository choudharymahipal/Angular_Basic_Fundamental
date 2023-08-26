import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custome-directive',
  templateUrl: './custome-directive.component.html',
  styleUrls: ['./custome-directive.component.scss']
})
export class CustomeDirectiveComponent implements OnInit{

  constructor(){
    //
  }
  
  ngOnInit(): void {
    console.log("4.4 Custom Directive Component Loaded.");
  }
}
