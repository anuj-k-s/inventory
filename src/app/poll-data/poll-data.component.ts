import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PollDataService } from 'src/app/poll-data/poll-data.service';
import { interval } from "rxjs/internal/observable/interval";
import { startWith, switchMap } from "rxjs/operators";

@Component({
  selector: 'app-poll-data',
  templateUrl: './poll-data.component.html',
  styleUrls: ['./poll-data.component.css']
})
export class PollDataComponent implements OnInit {

  constructor(private httpClient: HttpClient, private pollDataService: PollDataService) { }
  public statuses;
  model=null;
  public list = [{
    "name": "Bhaskar",
    "age": 30,
    "cars": ["Ford", "BMW", "Fiat"]
  }, {
    "name": "Aks",
    "age": 30,
    "cars": ["Ford", "BMW", "Fiat"]
  }, {
    "name": "Aman",
    "age": 30,
    "cars": ["Ford", "BMW", "Fiat"]
  },{
    "name": "Alok",
    "age": 30,
    "cars": ["Ford", "BMW", "Fiat"]
  }]
  public isStatusTab: boolean = false;
  public isLocationTab: boolean = false;
  public isInformationTab: boolean = true;

  ngOnInit() {

    interval(5000)
      .pipe(
        startWith(0),
        switchMap(() => this.pollDataService.getTweets())
      )
      .subscribe(res => {
        this.statuses = res
        console.log(this.statuses)
      }
      )
  }
  ;

  public selectTab(value: string): void {
    if (value === "location") {
      this.isStatusTab = false;
      this.isLocationTab = true;
      this.isInformationTab = false;
    } else if (value === "status") {
      this.isStatusTab = true;
      this.isLocationTab = false;
      this.isInformationTab = false;
    } else {
      this.isStatusTab = false;
      this.isLocationTab = false;
      this.isInformationTab = true;
    }
  }

}
