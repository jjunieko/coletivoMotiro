import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-preciso-ajuda',
  templateUrl: './preciso-ajuda.page.html',
  styleUrls: ['./preciso-ajuda.page.scss'],
})
export class PrecisoAjudaPage implements OnInit {

  constructor(public loading: LoadingController) { }

  ngOnInit() {
    this.presentLoading();
  }
  async presentLoading() {
    const loading = await this.loading.create({
      cssClass: 'my-custom-class',
      message: ' Aguarde...',
      duration: 3000
    });
    await loading.present();

  }
}
