import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custome-pipes',
  templateUrl: './custome-pipes.component.html',
  styleUrls: ['./custome-pipes.component.scss']
})
export class CustomePipesComponent implements OnInit{
  Title: string = "This is plain text";

  constructor() { 
    //
  }

  ngOnInit(): void {
    console.log("5.2 Custom Pipes Component Loaded.");
  }

  keyUp(value: any) {
    this.Title = value;
  }
}
