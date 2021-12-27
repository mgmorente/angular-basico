import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaz';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styles: [
  ]
})
export class PersonajesComponent {

  // Con @input() indicamos que se desea recibir, del componente padre, un array de tipo Personaje (importado arriba) y lo almacenamos en "personajes"
  // @Input() personajes: Personaje[] = [];

  constructor(private dbzService: DbzService) { }

  // Conseguimos la lista de personajes mediante un getter (procedente del servicio cargado en el constructor)
  get personajes() {
    return this.dbzService.personajes;
  }
}
