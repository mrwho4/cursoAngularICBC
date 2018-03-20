import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { SucursalComponent } from './sucursal/sucursal.component';
import { FiltroComponent } from './filtro/filtro.component';
import { ListaSucursalesComponent } from './lista-sucursales/lista-sucursales.component';
import { DatosService } from './services/datos.service';
import { AgregarPageComponent } from './agregar-page/agregar-page.component';
import { ListaPageComponent } from './lista-page/lista-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavbarComponent } from './page-common/navbar/navbar.component';
// import { ConversorComponent } from './conversor/conversor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { DistancePipe } from './distance.pipe';


const appRoutes: Routes = [
  { path: 'lista', component: ListaPageComponent},
  { path: '', redirectTo: '/lista', pathMatch: 'full' },
  { path: 'agregar', component: AgregarPageComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SucursalComponent,
    FiltroComponent,
    ListaSucursalesComponent,
    ListaPageComponent,
    AgregarPageComponent,
    PageNotFoundComponent,
    NavbarComponent,
    DistancePipe
    // ConversorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production})
  ],
  providers: [DatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
