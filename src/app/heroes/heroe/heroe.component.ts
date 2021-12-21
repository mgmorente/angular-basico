import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent {
    nombre: string = 'Iroman';
    edad: number = 45;

    get nombreMay() {
        return this.nombre.toLocaleUpperCase();
    }

    obtenerFusion() {
        return `${ this.nombre } - ${ this.edad }`;
    }

    cambiarNombre():void {
        this.nombre = 'Spiderman';
    }
    cambiarEdad():void {
        this.edad = 30;
    }
}