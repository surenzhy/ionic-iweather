import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class WeatherProvider {

  apiKey='03144186d8f6bd8d';
  url;

  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
    this.url='http://api.wunderground.com/api/'+this.apiKey+'/conditions/q';
  }
  
  getWeather(city, state){
    return this.http.get(this.url+'/'+state+'/'+city+'.json')
    .map(res => res);
  }

}
