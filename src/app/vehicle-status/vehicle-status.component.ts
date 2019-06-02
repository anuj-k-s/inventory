import { Component, OnInit } from '@angular/core';
import { Humidity } from 'src/app/model/Humidity';

@Component({
  selector: 'app-vehicle-status',
  templateUrl: './vehicle-status.component.html',
  styleUrls: ['./vehicle-status.component.css']
})
export class VehicleStatusComponent implements OnInit {

  constructor() { }
  public humidityList :Array<Humidity>= new Array<Humidity>();


  ngOnInit() {
    this.humidityList.push(new Humidity("11:26:57","112"));
  }

}
