import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from "rxjs/operators";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PollDataService {
  constructor(private http:HttpClient) { }

getTweets(): Observable<String> {
  return this.http.get<String>('http://localhost:9090/asset-tracker-api//msgng-setup');
}


}
