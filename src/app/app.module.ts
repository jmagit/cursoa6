import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import localeEsExtra from '@angular/common/locales/extra/es';

registerLocaleData(localeEs, 'es', localeEsExtra);

import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AgioCoreModule, LoggerService, ERROR_LEVEL } from '../agio-core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PersonasVMService, PersonasDAOVMService } from './personas/personas-vm.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DemoComponent } from './demo/demo.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { DinamicosComponent, DynamicComponent, MyHostDirective } from './dinamicos/dinamicos.component';
import { PERSONAS_COMPONENT } from './personas/personas.component';
import { BLOG_COMPONENT } from './blog/blog.component';
import { MainModule } from './main/main.module';
import { SecurityModule, AuthInterceptor, LoggingInterceptor } from './security';
import { AppCommonModule } from './app-common';
import { TARJETAS_COMPONENT } from './tarjetas/tarjetas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DemoComponent,
    CalculadoraComponent,
    DinamicosComponent, DynamicComponent, MyHostDirective,
    PERSONAS_COMPONENT, BLOG_COMPONENT, TARJETAS_COMPONENT,
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, RouterModule.forRoot(routes),
    AgioCoreModule, MainModule, AppCommonModule, SecurityModule,
    NgbModule.forRoot()
  ],
  providers: [
    LoggerService,
    { provide: ERROR_LEVEL, useValue: 4 },
    { provide: LOCALE_ID, useValue: 'es' },
    { provide: PersonasVMService, useClass: PersonasDAOVMService },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true, },
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true, },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
