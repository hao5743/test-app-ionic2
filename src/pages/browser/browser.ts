import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
/*
  Generated class for the Browser page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-browser',
  templateUrl: 'browser.html',
  providers:[InAppBrowser]
})
export class BrowserPage {

  constructor(public navCtrl: NavController,
  public navParams: NavParams,
  private iab: InAppBrowser
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BrowserPage');
    const browser = this.iab.create('https://ionic.io');
    browser.show();
  }

}
