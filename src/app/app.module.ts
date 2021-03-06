import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// components
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
import { GeolocationService } from './geolocation.service';
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EditarPageComponent } from './editar-page/editar-page.component';

//reducers
import { userLocation, sucursalSelected, editForm } from "./reducers/reducers";


const appRoutes: Routes = [
  { path: 'lista', component: ListaPageComponent },
  { path: '', redirectTo: '/lista', pathMatch: 'full' },
  { path: 'agregar', component: AgregarPageComponent },
  { path: 'sucursal/:id', component: EditarPageComponent },
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
    DistancePipe,
    EditarPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    StoreModule.forRoot({ userLocation, sucursalSelected, editForm }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production
    })
  ],
  providers: [DatosService, GeolocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
