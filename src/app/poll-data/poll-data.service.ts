import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from "rxjs/operators";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PollDataService {
  posts;
  postsSubscription;
  timerSubscription;
  constructor(private http:HttpClient) { }

//   private refreshData(): void {
//     this.postsSubscription = this.http.get('url').subscribe(posts => {
//         this.posts = posts;
//         this.subscribeToData();
//     });
// }

// private subscribeToData(): void {
//     this.timerSubscription = Observable.interval
//     .subscribe(() => this.refreshData());
// }

getTweets(): Observable<String> {
  return this.http.get<String>('http://localhost:9090/asset-tracker-api//msgng-setup');
}


}
