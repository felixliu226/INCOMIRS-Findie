import { Component } from '@angular/core';

import { MoviePage } from '../movie/movie';
import { RestaurantPage } from '../restaurant/restaurant';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = RestaurantPage;
  tab2Root: any = MoviePage;
  tab3Root: any = ProfilePage;

  constructor() {

  }
}
