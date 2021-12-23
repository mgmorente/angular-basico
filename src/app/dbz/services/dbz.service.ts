import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interfaz";

@Injectable({
    providedIn: 'root',
  })
export class DbzService {

    personajes: Personaje[] = [
        {
          nombre: 'goku',
          poder: 13000
        },
        {
          nombre: 'vegeta',
          poder: 9500
        }
      ]


    constructor() {
        console.log('Servicio inicializado...');
    }
}