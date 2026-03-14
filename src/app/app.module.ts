import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManutencaoListComponent } from './components/manutencao-list/manutencao-list.component';
import { ManutencaoFormComponent } from './components/manutencao-form/manutencao-form.component';

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    ManutencaoListComponent,
    ManutencaoFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
bootstrap: [AppComponent]
})
export class AppModule { }
