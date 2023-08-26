import { Component, OnInit } from '@angular/core';
import { DataStoreService } from 'src/app/Shared/Services/data-store.service';

@Component({
  selector: 'app-using-service',
  templateUrl: './using-service.component.html',
  styleUrls: ['./using-service.component.scss']
})
export class UsingServiceComponent implements OnInit {
  message: string = "";

  constructor(private svc: DataStoreService) { }

  ngOnInit(): void {
  }

  OnCreate() {
    this.svc.DummyData = "This data stored in service.";
  }

  OnFetch() {
    this.message = this.svc.DummyData;
  }

  OnRemove() {
    this.svc.DummyData = "";
    this.message = "";
  }
}
