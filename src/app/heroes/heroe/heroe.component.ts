import { Component } from "@angular/core";
import { ThrowStmt } from '@angular/compiler';


@Component({
    selector:"app-heroe",
    templateUrl:"heroe.component.html"
})
export class heroeComponent{
    nombre:string = "IroMan";
    edad  :number = 40
    get capitalizado(){
        return this.nombre.toUpperCase();
    } 

    cambiarNombre():void{
        this.nombre = "Hector"
    }

    cambiarEdad():void{
        this.edad = 30;
    }
    obtenerNombre(){
        return `${this.nombre}-${this.edad}`
    }
}