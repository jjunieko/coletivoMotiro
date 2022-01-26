import { Component, ElementRef, ViewChild } from "@angular/core";
import { StatusBar } from "@awesome-cordova-plugins/status-bar/ngx";
import { ModalController, Platform } from "@ionic/angular";
import { SplashPage } from "./splash/splash.page";
import { Router } from "@angular/router";
import { SplashScreen } from "@awesome-cordova-plugins/splash-screen/ngx";



@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  routerHidden = true;
  @ViewChild("splash", { static: false }) splash: ElementRef;
  constructor(
    private platform: Platform,
    private modalCtrl: ModalController,
    private router: Router,
    public splashscreen: SplashScreen,
    private statusBar: StatusBar
    
  ) {
    this.initializeApp();
  }

  initializeApp() {
    
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashscreen.hide();
      this.presentSplashScreen();

      setTimeout(() => {
        this.routerHidden = false;
        // this.splash.nativeElement.style.display = 'none';
        this.splash.nativeElement.style.display = "none";
      }, 3000);
    });
    this.router.navigate(["/home"], { skipLocationChange: false });

    
  }

  async presentSplashScreen() {
    const modal = await this.modalCtrl.create({
      component: SplashPage,
    });
    return await modal.present();
  }
  
}
