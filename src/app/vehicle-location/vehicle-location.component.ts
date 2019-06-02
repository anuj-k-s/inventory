import { Component, OnInit } from '@angular/core';
import { Location } from 'src/app/model/Location';

@Component({
  selector: 'app-vehicle-location',
  templateUrl: './vehicle-location.component.html',
  styleUrls: ['./vehicle-location.component.css']
})
export class VehicleLocationComponent implements OnInit {

  constructor() { }
 public locationList :Array<Location>= new Array<Location>();

  ngOnInit() {
    this.locationList.push(new Location("Kolkata","1st June"));
  }

}
