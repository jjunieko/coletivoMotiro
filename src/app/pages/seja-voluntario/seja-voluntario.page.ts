import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-seja-voluntario',
  templateUrl: './seja-voluntario.page.html',
  styleUrls: ['./seja-voluntario.page.scss'],
  providers: [NavParams],
})
export class SejaVoluntarioPage implements OnInit {
  @ViewChild('mySlider') mySlider: any;

constructor(  public navCtrl: NavController,
public navParams: NavParams,) {
}

voluntario =  [
  {
    "img": "../../../assets/imagens/_DSC3950.jpg",
    "posicao": "2 ",
    /* "nome": "teste",
    "camisa": "4" */
  },
  {
    "img": "../../../assets/imagens/_DSC6197.jpg",
    "posicao": "3 ",
  /*   "nome": "teste",
    "camisa": "26" */
  },
  {
   "img": "../../../assets/imagens/_DSC7799.jpg",
   "posicao": "4 ",
 /*   "nome": "teste",
   "camisa": "26" */
 },
 {
   "img": "../../../assets/imagens/_DSC8050.jpg",
   "posicao": "5 ",
 /*   "nome": "teste",
   "camisa": "26" */
 }
  
]

slideNext(){
 this.mySlider.slideNext();
/*  this.mySlider = setTimeout(alert, 3000) */
}

slidePrev(){
 this.mySlider.slidePrev();
}

ngOnInit() {
}





}