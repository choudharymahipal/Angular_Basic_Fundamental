import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pre-define-pipes',
  templateUrl: './pre-define-pipes.component.html',
  styleUrls: ['./pre-define-pipes.component.scss']
})
export class PreDefinePipesComponent implements OnInit {
  Uppercase_Text: string = "uppercase text";
  Lowercase_Text: string = "Lowercase Text";
  Today_Date: number = Date.now();
  Item_Price: number = 234334;

  constructor(private datePipe: DatePipe) { 
    //
  }

  ngOnInit(): void {
    console.log("5.1 Pre-Define Pipes Component Loaded.");
  }
}
