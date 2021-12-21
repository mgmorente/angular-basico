import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// componentes
import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
// modulos
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
  ],
  imports: [ // modulos
    BrowserModule,
    HeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
