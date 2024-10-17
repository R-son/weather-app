import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { environment } from '../../environments/environment';  // Adjust the path if needed

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  private map: any;

  constructor() {}

  ngOnInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [51.505, -0.09],
      zoom: 5
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    L.tileLayer(`https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=${environment.openWeatherApiKey}`, {
      attribution: '© OpenWeatherMap',
      maxZoom: 19
    }).addTo(this.map);
  }
}