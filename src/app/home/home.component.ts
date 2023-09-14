import { Component, OnInit } from '@angular/core';
import { Toast } from '@capacitor/toast';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
  lambda: number | undefined;
  micro: number | undefined;
  tempo: string | undefined;
  textoCompleto: string = "";

  onSubmit() {
  }
  async calcular() {

    if (this.lambda === undefined || 0 || this.micro === undefined || 0) {
      await Toast.show({
        text: 'tempo vazios',
        position: 'center',
        duration: 'short'
      });
      console.log('erro')
      return
    }
    if (this.tempo == undefined) {
      await Toast.show({
        text: 'tempo vazios',
        position: 'center',
        duration: 'short'
      });
      return
    }

    var p = this.lambda / this.micro;
    var l = this.lambda / (this.micro - this.lambda);
    var lq = p * l;
    var w = 1 / (this.micro - this.lambda);
    var wq = p * w;
    var ws = w - wq;
    var p0 = 1 - p;
    this.textoCompleto = `
    p = ${p} <br> 
    l = ${l} <br> 
    lq = ${lq} <br> 
    w = ${w} ${this.tempo} <br> 
    wq = ${wq} ${this.tempo} <br> 
    ws = ${ws} ${this.tempo} <br> 
    p0 = ${p0} <br>
    `
  }
}
