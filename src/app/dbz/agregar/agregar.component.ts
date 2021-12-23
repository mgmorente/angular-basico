import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaz';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {

  // Recibimos del cpn-padre el objeto de tipo personaje
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  };

  // Usamos el decorador @Output porque el cpn-hijo necesita emitir al cpn-padre
  // Usamos el EventEmitter porque necesitamos emitir el evento
  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  // Funcion agregar personaje
  agregar() {
    
    // Validar input nombre
    if (this.nuevo.nombre.trim().length === 0) { return; }
    
    // Evento personalizado que devuelve el objeto (con datos) al cpn-padre
    this.onNuevoPersonaje.emit( this.nuevo );
    
    // Inicializar el objeto nuevo
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }


}
