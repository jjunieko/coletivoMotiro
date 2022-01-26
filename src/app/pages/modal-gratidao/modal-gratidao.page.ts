import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, ModalController, NavController, NavParams, ToastController } from '@ionic/angular';
import { ServiceMotiroService } from 'src/app/services/service-motiro.service';
import { Storage } from '@ionic/storage-angular';
import { PerfilUser } from '../models/perfilUser';

@Component({
  selector: 'app-modal-gratidao',
  templateUrl: './modal-gratidao.page.html',
  styleUrls: ['./modal-gratidao.page.scss'],
})
export class ModalGratidaoPage implements OnInit {
  @Input() id: number;

  
  public isEdit: boolean = false;
  public form: FormGroup;
  public carregar: any;

  constructor(
    public servMotiro: ServiceMotiroService,
    public formBuilder: FormBuilder,
    public toastControl: ToastController,
    public loading: LoadingController,
    public fecharModal: ModalController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public salvarService:ServiceMotiroService,
    private storage: Storage
  ) {

    this.form = formBuilder.group({
      name: ["", Validators.required],
      contato: ["", Validators.required],
    });
  }

  async ngOnInit(): Promise<void> {
    if ( this.id !=null) {
      await this.editarDadosCovidModal();
      console.log(this.id, "meu iddd")
      this.isEdit = true;
     /*  console.log(this.isEdit, "editttttt") */
    }
    
  }

  async showMensagem(): Promise<void> {
    let message: string = "Comida Cadastrada com Sucesso";
    if (this.isEdit) {
      message = "Comida Atualizada com Sucesso";
    }
    const toast = await this.toastControl.create({
      message: message,
      duration: 2000,
      color: "success",
    });

    toast.present();
  }

  public async submitForm(): Promise<void> {
    /* console.log(this.form.value, "estou aqui modalList"); */
    this.salvarService.salvarDadosCv(this.form.value, this.id);
    this.fecharCard();
  }

  public async editarDadosCovidModal(): Promise<void> {
    const edCovid = await this.salvarService.getCovidForm(this.id);
   /*  console.log(this.id, "editando id para achar ele")
    console.log(edCovid, "editar covid"); */
    this.form.patchValue(edCovid);
    
  }


  fecharCard(): void {
    this.fecharModal.dismiss();
  }
}
