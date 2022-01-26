import { Component, ElementRef, EventEmitter, OnInit } from '@angular/core';
import { NavController, ToastController } from "@ionic/angular";
/* import { LottieAnimationViewModule } from 'ng-lottie';
 */

@Component({
  selector: 'app-doacoes',
  templateUrl: './doacoes.page.html',
  styleUrls: ['./doacoes.page.scss'],
})
export class DoacoesPage implements OnInit {
 /*  lottieConfig : any;
  anim: any; */
  constructor( public navCtrl: NavController) { 
    /*   LottieAnimationViewModule.forRoot()

      this.lottieConfig = {
        path: "assets/lottie/25067-donate.json",
        autoplay: true,
        loop: true,
        speed: 0.75
      } */
       
    }

  
  ngOnInit() {

  }

}
