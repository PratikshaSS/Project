import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {
 name='poonam';
 journey : any;
 url = 'http://localhost:3000'
  constructor( private httpClient : HttpClient) { }

  postApiCall(endPoint : string, formData :any){
    let url = this.url + '/' + endPoint
    return this.httpClient.post(url, formData)
    // this.httpClient.post()
  }

  getApiCall(journey:any){
    let url = this.url + '/' + journey;
    return this.httpClient.get(url)
  }
}
