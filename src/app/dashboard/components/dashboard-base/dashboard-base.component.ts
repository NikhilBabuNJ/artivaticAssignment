import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { City } from '../../models/city.model';

@Component({
  selector: 'app-dashboard-base',
  templateUrl: './dashboard-base.component.html',
  styleUrls: ['./dashboard-base.component.scss']
})
export class DashboardBaseComponent implements OnInit {

  constructor(private dashboardService: DashboardService) { }

  public statesByCountry: Array<{'City': string, 'State': string, 'District': string }>;
  public selectedState: string;
  public states = [] = [];
  public cities = [] = [];
  public markers = [] = [];


  ngOnInit() {
    this.getAllStates();
  }

  /**
   * get all the states
   */

  public getAllStates() {
    this.dashboardService.getAllStates()
      .subscribe((states: any) => {
        this.statesByCountry = states;
        states.forEach((stateObj: City) => {
          if (this.states.indexOf(stateObj.State) === -1) {
            this.states.push(stateObj.State);
          }
        })
        this.sortByAlphabeticalOrder(this.states)
      }, (err) => {
        console.log('error occured...', err);
      })
  }

  /**
   * sort by AlphabeticalOrder
   * @param arr 
   */

  public sortByAlphabeticalOrder(arr) {
    return arr.sort((a, b) => {
      return a.localeCompare(b);
    });
  };

  /**
   * get cities based on selected city
   * @param state 
   */

  public getCitiesByState(state: string) {
    this.cities = [];
    this.markers = [];
    this.selectedState = state;
    this.statesByCountry.forEach((states) => {
      if (states.State == state) {
        this.cities.push({ Cities: states.City });
        this.getLatLng(states.City)
      }
    })
    // this.getLatLng('as')
  }

  /**
   * get latitude and longitude for an city
   * @param city 
   */

  public async getLatLng(city) {
    let geocoder = new google.maps.Geocoder();
    let lat: number;
    let lng: number;
    geocoder.geocode({ 'address': city }, (results, status) => {
      if (status == google.maps.GeocoderStatus.OK) {
        lat = results[0].geometry.location.lat();
        lng = results[0].geometry.location.lng();
        this.markers = [...this.markers, { lat, lng, city }];
      }
    });
  }

  /**
   * on table row click
   * @param rowData 
   */

  public onRowClick(rowData) {
    this.markers = [];
    this.getLatLng(rowData);
  }

}
