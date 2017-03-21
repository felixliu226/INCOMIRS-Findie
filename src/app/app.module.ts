import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { RestaurantPage } from '../pages/restaurant/restaurant';
import { DetailsPage } from '../pages/details/details';
import { MoviePage } from '../pages/movie/movie';
import { ProfilePage } from '../pages/profile/profile';
import { TabsPage } from '../pages/tabs/tabs';
import { FilterPage } from '../pages/filter/filter';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RestaurantPage,
    DetailsPage,
    MoviePage,
    ProfilePage,
    FilterPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RestaurantPage,
    DetailsPage,
    MoviePage,
    ProfilePage,
    FilterPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
