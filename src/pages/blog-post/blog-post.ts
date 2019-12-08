import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BlogPostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-blog-post',
  templateUrl: 'blog-post.html',
})
export class BlogPostPage {

  text: any ="<h1>Hello</h1> <sup>world</sup> <p style='color: white; background:red;'>This is it bro !!!</p>"; 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BlogPostPage');
  }

  goBack(){
    this.navCtrl.pop();
  }
}
