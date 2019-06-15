import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PedidosComponent } from "./pedidos/pedidos.component";
import { ReportesComponent} from "./reportes/reportes.component";
import { HomeComponent } from "./home/home.component";
import { ClientesComponent } from "./clientes/clientes.component";
import { InventarioComponent } from "./inventario/inventario.component";

//en esta parte se definen las rutas de la pagina 
const routes: Routes = [
  {path:"pedidos/:idUsuario", component:PedidosComponent},
  {path:"reportes",component:ReportesComponent},
  {path:"home",component:HomeComponent},
  {path:"clientes",component:ClientesComponent},
  {path:"inventario",component:InventarioComponent},
  {path:"**",component:HomeComponent},
  {path:"",component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
