import { Component, OnInit } from '@angular/core';
import { Humidity } from 'src/app/model/Humidity';
import { Input } from '@angular/core';
import { SimpleChanges } from '@angular/core';
import { PollDataService } from 'src/app/poll-data/poll-data.service';
import { Temperature } from 'src/app/model/Temperature';

@Component({
  selector: 'app-vehicle-status',
  templateUrl: './vehicle-status.component.html',
  styleUrls: ['./vehicle-status.component.css']
})
export class VehicleStatusComponent implements OnInit {

  @Input() sensorsData;
  constructor(private pollDataService: PollDataService) { }
  public humidityList: Array<Humidity> = new Array();
  public tempList: Array<Temperature> = new Array();
  fieldList: any[] = this.humidityList;

  ngOnInit() {
    // this.humidityList.push(new Humidity(new Date(),"112"));
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (this.sensorsData) {
      this.humidityList.push(new Humidity(new Date(), this.sensorsData['humidity']));
      this.humidityList.reverse()
      this.tempList.push(new Temperature(new Date(), this.sensorsData['temp']));
      this.tempList.reverse()
    }
  }


  getList(field: string) {
    if (field === 'temp') {
      this.fieldList = this.tempList;
    } else {
      this.fieldList = this.humidityList;
    }
  }
}
