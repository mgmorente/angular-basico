import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Personaje } from '../interfaces/dbz.interfaz';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  personajes: Personaje[] = [];

  nuevo: Personaje = {
    nombre: 'Truncks',
    poder: 12500
  };
  
  // Metodo que se recibe del cpn-hijo el objeto de tipo personaje
  agregarPersonaje( argumento: Personaje ) {
    this.personajes.push(argumento);
    Swal.fire(
      'Perfecto!!!',
      'El personaje ' + argumento.nombre + ' fue grabado correctamente',
      'success'
    )
  }

  constructor(private dbzService: DbzService) {
    this.personajes = dbzService.personajes;
  }

}
