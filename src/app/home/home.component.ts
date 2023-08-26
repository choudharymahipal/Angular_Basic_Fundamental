import { Component } from '@angular/core';
import { DataStoreService } from '../Shared/Services/data-store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title: string = "Home Component";
  sessionMsg: string = "";
  serviceMsg: string = "";

  constructor(private svc: DataStoreService) {

  }

  ngOnInit(): void {
    console.log("0.0 Home Component Loaded.");
    this.OnFetchSession();
    this.OnFetchService();
  }
OnFetchSession() {
    try {
      let data = sessionStorage.getItem("message");
      if (data) {
        this.sessionMsg = data;
      } else {
        this.sessionMsg = "";
      }
    } catch (error) {
      this.sessionMsg = "";
    }
  }

  OnFetchService() {
    this.serviceMsg = this.svc.DummyData;
  }
}
