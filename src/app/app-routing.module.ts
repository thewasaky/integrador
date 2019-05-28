import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PedidosComponent } from "./pedidos/pedidos.component";
import { ReportesComponent} from "./reportes/reportes.component";

const routes: Routes = [
  {path:"pedidos", component:PedidosComponent},
  {path:"reportes",component:ReportesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
