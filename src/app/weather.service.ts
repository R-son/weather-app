import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';  // Adjust the path if needed

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = environment.openWeatherApiUrl;
  private apiKey = environment.openWeatherApiKey;

  constructor(private http: HttpClient) {}

  // Fetch weather for a specific city
  getWeatherByCity(city: string): Observable<any> {
    return this.http.get(`${this.apiUrl}weather?q=${city}&appid=${this.apiKey}&units=metric`);
  }
}