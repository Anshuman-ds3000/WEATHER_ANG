import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  temp_c:string=''
  wind_speed:string=''
  constructor() { }
  async checkWeather(city:string)
  {
    try
    {
    const res=await fetch(`http://api.weatherapi.com/v1/current.json?key=412b492bf8de4497ae193119252801&q=${city}`)
    const data=await res.json()
    console.log(data)
    this.temp_c= "Temperature: " + data.current.temp_c;
    this.wind_speed="Wind Speed:" +data.current.wind_kph + " Km/h"
    }
    catch(error)
    {
      console.error(error)
    }
    }
  }
