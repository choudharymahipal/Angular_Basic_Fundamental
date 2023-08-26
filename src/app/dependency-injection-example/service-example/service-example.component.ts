import { Component } from '@angular/core';
import { FakeDataService } from 'src/app/Shared/Services/fake-data.service';

@Component({
  selector: 'app-service-example',
  templateUrl: './service-example.component.html',
  styleUrls: ['./service-example.component.scss']
})
export class ServiceExampleComponent {
  posts: any;
  title: string = "";
  body: string = "";

  constructor(private fakeDataSvc: FakeDataService){
    console.log("3.1 Service Example component loaded.");
  }
  
  ngOnInit(): void {
    console.log("Service component loaded");
    this.getData();
  }

  getData() {
    this.fakeDataSvc.getPosts().subscribe(response => {
      this.posts = response;
      console.log(this.posts);
    });
  }

  ViewData(data: any) {
    debugger
    console.log(data);
    this.title = data.title;
    this.body = data.body;
  }

}
