import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

// componentes
import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from "./listado/listado.component";

@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    exports: [
        HeroeComponent,
        ListadoComponent
    ],
    imports: [ 
        CommonModule // modulo para directivas
    ]
})
export class HeroesModule {}