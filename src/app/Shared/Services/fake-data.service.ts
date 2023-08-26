import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class FakeDataService {

  private url = environment.fake_data_url;

  constructor(private httpClient: HttpClient) { }

  getPosts() {
    return this.httpClient.get(this.url);
  }
}
