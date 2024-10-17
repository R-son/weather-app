import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  city: string = '';
  weather: any = null;
  randomWeathers: any[] = [];

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getRandomCitiesWeather();
  }

  getWeather(): void {
    this.weatherService.getWeatherByCity(this.city).subscribe({
      next: (data) => this.weather = data,
      error: (error) => console.error('Error fetching weather data', error)
    });
  }

  getRandomCitiesWeather(): void {
    const randomCities = ['New York', 'London', 'Paris', 'Tokyo', 'Sydney', 'Saint Petersburg', 'Barcelona', 'São Paulo', 'Vancouver'];
    randomCities.forEach(city => {
      this.weatherService.getWeatherByCity(city).subscribe({
        next: (data) => this.randomWeathers.push(data),
        error: (error) => console.error('Error fetching weather for random city', error)
      });
    });
  }

  convertToFahrenheit(celsius: number): number {
    return Math.round((celsius * 9/5) + 32);
  }  

  getWeatherIcon(iconCode: string): string {
    return `https://openweathermap.org/img/wn/${iconCode}.png`;
  }
}
