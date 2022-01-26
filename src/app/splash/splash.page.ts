import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage {
  routerHidden = true;
  constructor(public modalController: ModalController, private router: Router, private splashscreen : SplashScreen) { }

  ionViewDidEnter() {
    this.splashscreen.hide();
    
    setTimeout(() => {
      this.routerHidden = false;
      this.modalController.dismiss();
     
    }, 4000); 
    this.router.navigate(["/home"], { skipLocationChange: false });
    
  }

}
