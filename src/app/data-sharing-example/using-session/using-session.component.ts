import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-using-session',
  templateUrl: './using-session.component.html',
  styleUrls: ['./using-session.component.scss']
})
export class UsingSessionComponent implements OnInit {
  message: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  OnCreate() {
    sessionStorage.setItem("message", "This data stored in session.");
  }

  OnFetch() {
    try {
      let data = sessionStorage.getItem("message");
      if (data) {
        this.message = data;
      } else {
        this.message = "";
        alert("No data found");
      }
    } catch (error) {
      this.message = "";
      alert("No data found");
    }
  }

  OnRemove() {
    sessionStorage.removeItem("message");
    this.message = "";
  }
}
