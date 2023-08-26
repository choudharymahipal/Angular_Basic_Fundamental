import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-sharing-example',
  templateUrl: './data-sharing-example.component.html',
  styleUrls: ['./data-sharing-example.component.scss']
})
export class DataSharingExampleComponent implements OnInit {
  ngOnInit(): void {
    console.log("2.0 Data Sharing Component Loaded.");
  }
}
