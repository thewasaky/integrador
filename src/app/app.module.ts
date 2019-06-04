import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { UsuariosService } from "./usuarios.service";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ReportesComponent } from './reportes/reportes.component';
import { HomeComponent } from './home/home.component';
import { Services } from '@angular/core/src/view';

@NgModule({
  declarations: [
    AppComponent,
    PedidosComponent,
    ReportesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   FormsModule,
    HttpClientModule
  ],
  providers: [
    UsuariosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
