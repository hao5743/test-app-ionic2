import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { BrowserPage } from '../browser/browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goBrowser(){
    this.navCtrl.push(BrowserPage,{});
  }

}
