import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// componentes
import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
// modulos
import { HeroesModule } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
  ],
  imports: [ // modulos
    BrowserModule,
    HeroesModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
