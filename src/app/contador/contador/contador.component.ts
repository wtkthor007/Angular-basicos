import { Component } from "@angular/core";

@Component({
    selector:"app-contador",
    template:`
        <h1>{{titulo}}</h1>
        <h3>la base es <strong>{{base}}</strong></h3>
        <button (click)="acumular(+base)">+{{base}}</button>
        <span>{{contador}}</span>
        <button (click)= "acumular(-base)">-{{base}}</button>
    `
})
export class contadorComponent{
    public titulo:string = 'Contador App';
    public contador:number = 10;
    public base:number = 5;
  
    acumular(valor:number):void{
      this.contador+=valor;
    }

}