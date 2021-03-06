import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
//esta tambien es una clase muy importante, aqui se realizan todas las peticiones al servidor para la conexion a la 
//base de datos
export class UsuariosService {
url="http://localhost/APIPHP/";
  constructor(private http:HttpClient) {
   }
   obternerUsuarios(){
     return this.http.get(`${this.url}ObtenerUsuarios.php`);
   }
   obternerPedidos(){
    return this.http.get(`${this.url}ObtenerPedidos.php`);
  }
  obternerPedidosSemanal(){
    return this.http.get(`${this.url}ObtenerPedidosSemana.php`);
  }
  obternerPedidosMensual(){
    return this.http.get(`${this.url}ObtenerPedidosMensual.php`);
  }
   altaUsuarios(usuarioRegister){
    return this.http.post(`${this.url}AltaUsuarios.php`,JSON.stringify(usuarioRegister));
   }
   altaPedido(pedido){
    return this.http.post(`${this.url}AltaPedido.php`,JSON.stringify(pedido));
  }
   bajaUsuario(idUsuario:number){
     return this.http.get(`${this.url}BajaUsuario.php?idUsuario=${idUsuario}`);
   }
   bajaPedido(idPedido:number){
    return this.http.get(`${this.url}BajaPedido.php?idPedido=${idPedido}`);
  }
   seleccionarUsuario(nombre:string,password:string){
     return this.http.get(`${this.url}SeleccionarUsuario.php?nombre=${nombre}&password=${password}`);
   }
   editarUsuario(usuario){
     return this.http.post(`${this.url}EditarUsuario.php`,JSON.stringify(usuario));
   }
   obternerClientes(){
    return this.http.get(`${this.url}ObtenerClientes.php`);
  }
  seleccionarPedidosCliente(id:number){
    return this.http.get(`${this.url}SeleccionarPedidosCliente.php?idUsuario=${id}`);
  }
  editarPedido(pedido){
    return this.http.post(`${this.url}EditarPedido.php`,JSON.stringify(pedido));
  }
  seleccionarPedido(idUsuario:number){
    return this.http.get(`${this.url}SeleccionarPedido.php?idPedido=${idUsuario}`);
  }
  obternerPedidosDia(){
    return this.http.get(`${this.url}ObtenerPedidosDia.php`);
  }
  obternerPedidosDiaEspecifico(fecha:Date){
    return this.http.get(`${this.url}ObtenerPedidosDiaEspecifico.php?fecha=${fecha}`);
  }
}