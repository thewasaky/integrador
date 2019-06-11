import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PedidosComponent } from "./pedidos/pedidos.component";
import { ReportesComponent} from "./reportes/reportes.component";
import { HomeComponent } from "./home/home.component";


const routes: Routes = [
  {path:"pedidos/:idUsuario", component:PedidosComponent},
  {path:"reportes",component:ReportesComponent},
  {path:"home",component:HomeComponent},
  {path:"**",component:HomeComponent},
  {path:"",component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
