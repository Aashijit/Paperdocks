import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  dashboardPageNames: any="home";

  browseBy = {
    title: 'Browse by',
    subTitle: 'Please select one of the categories',
    mode: 'ios',
    interface: 'popover'
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }


  buyCard(){
    this.navCtrl.push('CardDetailsPage');
  }

}
