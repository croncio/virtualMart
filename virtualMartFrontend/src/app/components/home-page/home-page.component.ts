import { Component, OnInit } from '@angular/core';
import { GoogleMapsAPIWrapper } from '@agm/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public lat;
  public lng;
  public zoom = 15;

  public canCheckIn: boolean;
  public userLocation;
  public siteLocation;

  constructor(private mapsWrapper: GoogleMapsAPIWrapper) {
    this.mapsWrapper = mapsWrapper;
    if (navigator) {
      navigator.geolocation.getCurrentPosition(pos => {
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;
      });
    }
  }

  ngOnInit() {

  }



}
