import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interfaz";

@Injectable({
    providedIn: 'root',
  })
export class DbzService {

    private _personajes: Personaje[] = [
      {
        nombre: 'goku',
        poder: 13000
      },
      {
        nombre: 'vegeta',
        poder: 9500
      }
    ]

    // Getter personajes
    get personajes (): Personaje[] {
      // return this._personajes;
      // Modo seguro: xxx
      return [...this._personajes];
    }

    constructor() {
        console.log('Servicio inicializado...');
    }

    // Metodo agregar personaje
    agregarPersonaje (personaje: Personaje) {
      this._personajes.push ( personaje );
    }
}