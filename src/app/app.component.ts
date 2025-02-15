import { Component,AfterViewInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'weatherf';
  dcity:string=''
  city:string=''
  temp:string=''
  text:string=''
  feels:string=''
  image:string=''
  setCity(event:any)
  {
    this.city=event.target.value
  }
  async onSearch()
  {
    this.dcity=this.city;
    try
    {
      const data=await fetch(`http://api.weatherapi.com/v1/current.json?key=58e489b4020d471494f181231250802&q=${this.dcity}`)
      const res=await data.json();
      this.image=res.current.condition.icon;
      this.temp= res.current.temp_c + "°";
      this.text=res.current.condition.text;
      this.feels="feels like " + res.current.feelslike_c + "°";
      console.log(res)
  
    }
    catch(error)
    {
      console.error(error);
    }
  }

  }
  

