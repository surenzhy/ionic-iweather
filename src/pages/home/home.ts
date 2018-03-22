import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  weather: any;
  location: [{
    city: any,
    state: any
  }];
  

  constructor(public navCtrl: NavController,
    private weatherProvider: WeatherProvider,
    private storage: Storage) {
      this.storage.clear();
  }

  ionViewWillEnter() {
    this.storage.get('location').then(val => {
      if(val != null){
        this.location = JSON.parse(val);
      }else {
        this.location = [{
          city: 'Miami',
          state: 'FL'
        }];
      }
      this.weatherProvider.getWeather(this.location[0].city, this.location[0].state)
      .subscribe(weather => {
        if(weather != null && weather.current_observation != null){
          this.weather = weather.current_observation;
        }
        console.log(this.weather);
      });
    });
  }
}
