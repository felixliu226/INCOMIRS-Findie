import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class RestaurantData{
    http:any;
    baseUrl: String;

    constructor(http:Http){
    this.http = http;
    this.baseUrl = '/~kf_prj/incomirs/api/';

    }
    getRestaurants(cuisine){
      return this.http.get(this.baseUrl+'search-restaurants/?cuisine='+cuisine).map(res=>res.json());

    }
    getDetails(itemid){
      return this.http.get(this.baseUrl+'restaurant-detail/?restaurantID='+itemid).map(res=>res.json());
    }

}
