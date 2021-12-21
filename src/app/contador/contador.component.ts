import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ title }}</h1>
    <h3>La base es <strong>{{base}}</strong></h3>
    <button (click) = "calcular(1)">+{{base}}</button>
    <span> {{ numero }} </span>
    <button (click) = "calcular(-1)">-{{base}}</button>
  `
})
export class ContadorComponent {
  title: string = 'contador';
  numero: number = 0;  
  base: number = 5;

  calcular (valor: number) {
    this.numero += valor * this.base;
  }
}