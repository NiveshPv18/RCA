import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  private jsonUrl: string = 'assets/rca_response.json';

  constructor(private httpClient: HttpClient) { }

  getJson(){
    return this.httpClient.get(this.jsonUrl);
  }
}
