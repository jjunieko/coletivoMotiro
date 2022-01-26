import { Component, OnInit } from "@angular/core";
import {
  LoadingController,
  ModalController,
  NavController,
  NavParams,
  Platform,
  ToastController,
} from "@ionic/angular";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { ServiceMotiroService } from "src/app/services/service-motiro.service";
import { ModalGratidaoPage } from "../modal-gratidao/modal-gratidao.page";
import { PerfilUser } from "../models/perfilUser";
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: "app-contato-emergencia",
  templateUrl: "./contato-emergencia.page.html",
  styleUrls: ["./contato-emergencia.page.scss"],
  providers: [NavParams],
})
export class ContatoEmergenciaPage implements OnInit {
  public salvarItens: Array<PerfilUser> = [];

  constructor(
    public salvarService: ServiceMotiroService,
    public modal: ModalController,
    private toastController: ToastController,
    public navCtrl: NavController,
    private plt: Platform,
    public navParams: NavParams,
    private router: Router,
    private storage: Storage,
    public laoding: LoadingController,
  ) {}

  async ngOnInit(): Promise<void> {
    await this.storage.create();
    this.getCovidForm();
    
  }

  async abrirModalCovid() {
    const modal = await this.modal.create({
      component: ModalGratidaoPage,
    });
    modal.onDidDismiss().then(async () => {
      await this.getCovidForm();
    });
    return await modal.present();
  }

  async editarDadosCovidVindoDaModal(id: number): Promise<void> {
    const modal = await this.modal.create({
      component: ModalGratidaoPage,
      componentProps: {
        id,
      },
    });
    modal.onDidDismiss().then(async () => {
      await this.getCovidForm();
    });
    return await modal.present();
  }

  async delete(key) {
    await this.salvarService.delete(key);
    await this.getCovidForm();
  }

  public async getCovidForm(): Promise<void> {
    setTimeout(async () => {
      
      this.salvarItens = await this.salvarService.getListarTodos();
/*       console.log(this.salvarItens, "vamos chegar aqui salvar itens getCovidForm");
 */    }, 2000);
  }
}
