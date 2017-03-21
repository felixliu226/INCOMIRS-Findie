import { Component } from '@angular/core';
import { Facebook, NativeStorage } from 'ionic-native';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  user: any;
  userReady: boolean;
  FB_APP_ID: number = 763496907191649;

  constructor() {
    Facebook.browserInit(this.FB_APP_ID, "v2.8");
  }

  ionViewCanEnter() {
    let env = this;
    NativeStorage.getItem('user')
    .then(function (data){
      env.user = {
        name: data.name,
        picture: data.picture
      };
        env.userReady = true;
    }, function(error){
      console.log(error);
    });
  }

  doFbLogout(){
    let env = this;
    Facebook.logout()
    .then(function(response) {
      //user logged out so we will remove him from the NativeStorage
      NativeStorage.remove('user');
      env.userReady = false;
    }, function(error){
      console.log(error);
    });
  }

  doFbLogin(){
    let env = this;
    let permissions = new Array<string>();
    //the permissions your facebook app needs from the user
    permissions = ["public_profile"];


    Facebook.login(permissions)
    .then(function(response){
      let userId = response.authResponse.userID;
      let params = new Array<string>();

      //Getting name and gender properties
      Facebook.api("/me?fields=name", params)
      .then(function(user) {
        user.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";
        //now we have the users info, let's save it in the NativeStorage
        NativeStorage.setItem('user',
        {
          name: user.name,
          picture: user.picture
        })
        .then(function(){
          env.userReady = true;
        }, function (error) {
          console.log(error);
        })
      })
    }, function(error){
      console.log(error);
    });
  }

}
