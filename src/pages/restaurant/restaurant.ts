import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import { RestaurantData } from '../../app/services/restaurant.data';
import { FilterPage } from '../filter/filter';

@Component({
  selector: 'page-restaurant',
  templateUrl: 'restaurant.html'
})
export class RestaurantPage {
  items: any;
  search: any;
  constructor(public navCtrl: NavController, public params:NavParams, private restaurantData: RestaurantData) {
      this.search = params.get('search');
  }
  ngOnInit(){
    this.getRestaurants('Japan');

  }
  getRestaurants(cuisine){
    this.restaurantData.getRestaurants(cuisine).subscribe(response =>{
        this.items=response.data;
    })
  }

   viewDetail(item){
      this.navCtrl.push(DetailsPage,{
        item:item
      });
   }
   filterPage(){
      this.navCtrl.push(FilterPage,{
      });
   }
}
