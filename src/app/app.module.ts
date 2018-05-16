import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import localeEsExtra from '@angular/common/locales/extra/es';

registerLocaleData(localeEs, 'es', localeEsExtra);

import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgioCoreModule, LoggerService, ERROR_LEVEL } from '../agio-core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DemoComponent } from './demo/demo.component';
import { PopupComponent } from './popup/popup.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { PERSONAS_COMPONENT } from './personas/personas.component';
import { PersonasVMService, PersonasDAOVMService } from './personas/personas-vm.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BLOG_COMPONENT } from './blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DemoComponent,
    PopupComponent,
    CalculadoraComponent,
    DinamicosComponent,
    PERSONAS_COMPONENT, BLOG_COMPONENT,
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    AgioCoreModule,
    NgbModule.forRoot()
  ],
  providers: [
    LoggerService,
    {provide: ERROR_LEVEL, useValue: 4 },
    {provide: LOCALE_ID, useValue: 'es' },
    {provide: PersonasVMService, useClass: PersonasDAOVMService},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
