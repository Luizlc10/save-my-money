import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contas',
  templateUrl: 'contas.html'
})
export class ContasPage {
  teste;
  constructor(public navCtrl: NavController) {
    this.teste = "teste";
  }
}
