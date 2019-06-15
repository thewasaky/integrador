import { Component, OnInit } from '@angular/core';
import { UsuariosService } from "../usuarios.service";

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
//esta clase ees para mostrar los clientes que esten registrados y los pedidos que han realizado
//por ahora, todo aquel que se registre sera cliente
export class ClientesComponent implements OnInit {
  cliente=null;
  tacos=null;
  constructor(private usuariosServicio:UsuariosService) { }

  ngOnInit() {
    this.obtenerClientes();
  }
  obtenerClientes() {
    this.usuariosServicio.obternerClientes().subscribe(
      result => this.cliente = result
    );
  }
  SeleccionarCliente(idCliente){
    this.usuariosServicio.seleccionarPedidosCliente(idCliente).subscribe(
      result => this.tacos=result
    );
    }
  
}
