import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the TestloginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-testlogin',
  templateUrl: 'testlogin.html',
})
export class TestloginPage {
  username:string;
  password:string;
  key:string = 'username';
  keytwo:string = 'password';

  constructor(public navCtrl: NavController, public navParams: NavParams,private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestloginPage');
  }
  Savelogin(){
    
    this.storage.set(this.key, this.username);
    this.storage.set(this.keytwo, this.password);
    this.storage.get('username').then((val) => {
      console.log('username is', val);
    });

    this.storage.get('password').then((val) => {
      console.log('password is', val);
    });
    
  }

 
}//end class
