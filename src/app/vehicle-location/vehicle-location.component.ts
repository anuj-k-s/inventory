import { Component, OnInit } from '@angular/core';
import { Location } from 'src/app/model/Location';
import { Input } from '@angular/core';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-vehicle-location',
  templateUrl: './vehicle-location.component.html',
  styleUrls: ['./vehicle-location.component.css']
})
export class VehicleLocationComponent implements OnInit, OnChanges {

@Input() data;

  constructor() { }
 public locationList :Array<Location>= new Array<Location>();

  ngOnInit() {
    this.locationList.push(new Location("Kolkata",new Date()));
  }

  ngOnChanges(changes: SimpleChanges): void {
   if(this.data['rfId']){
     if (this.locationList.length!==0){
     this.locationList.push(new Location(this.data['alert'],new Date()));
     }
   }
  }

}
