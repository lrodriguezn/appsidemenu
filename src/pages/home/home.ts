import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var $: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  constructor(public navCtrl: NavController) {

  }

  ngOnInit() {
    
   $.getScript('../assets/js/initialize.js', function(){
    });
    
  }

}
