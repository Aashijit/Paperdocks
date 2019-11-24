import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-card-details',
  templateUrl: 'card-details.html',
})
export class CardDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardDetailsPage');
  }

  goBack(){
    this.navCtrl.pop();
  }

  orderProduct(){
    this.navCtrl.push('ShoppingCartPage');
  }

}