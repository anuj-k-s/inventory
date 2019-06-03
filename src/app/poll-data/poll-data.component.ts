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

  constructor(private httpClient:HttpClient,private pollDataService:PollDataService) { }
public response;
model=null;
 public isStatusTab: boolean = false;
 public isLocationTab: boolean = false;
 public isInformationTab: boolean = true;
 public isVehicleSelected: boolean  =false;




public vehicleNumbers :Array<any>  =
[{ "vehicleNumber" :"KA 01 JQ 4378",
 "driverName" : "Karan Singh",
  "RfidNo" :1234786,
   "HumiditySensor" : 6,
    "TemparatureSensor" : 2 },
	{ "vehicleNumber" :"DL 4C AF 4943",
 "driverName" : "Arun Singh",
  "RfidNo" :234553,
   "HumiditySensor" : 6,
    "TemparatureSensor" : 2 },
	{ "vehicleNumber" :"KA 03 MG 2784",
 "driverName" : "Arun Singh",
  "RfidNo" :234553,
   "HumiditySensor" : 6,
    "TemparatureSensor" : 2 },
		{ "vehicleNumber" :"MH 01 AB 1278",
 "driverName" : "Arun Singh",
  "RfidNo" :234553,
   "HumiditySensor" : 6,
    "TemparatureSensor" : 2 },
			{ "vehicleNumber" :"MH 12 DE 14338",
 "driverName" : "Arun Singh",
  "RfidNo" :234553,
   "HumiditySensor" : 6,
    "TemparatureSensor" : 2 },
				{ "vehicleNumber" :"DL 1Y A3 550",
 "driverName" : "Arun Singh",
  "RfidNo" :234553,
   "HumiditySensor" : 6,
    "TemparatureSensor" : 2 }
  ]
  



  ngOnInit() {
console.log(this.model)
      interval(5000)
        .pipe(
          startWith(0),
          switchMap(() => this.pollDataService.getTweets())
        )
        .subscribe(res => {
          this.response = res  }
        )
      }
      ;
  
      public selectTab(value:string): void {
        debugger;
        if(value === "location"){
          this.isStatusTab = false;
          this.isLocationTab= true;
          this.isInformationTab = false;
        }else if (value === "status"){
          this.isStatusTab = true;
          this.isLocationTab= false;
          this.isInformationTab = false;
        }else{
          this.isStatusTab = false;
          this.isLocationTab= false;
          this.isInformationTab = true;
        }
      }


      isModalSelected(){
        if( this.model){

          return true
        } else{
          return false;
        }
      }
}
