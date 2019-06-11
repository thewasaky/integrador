import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
url="http://localhost/pruebaphp/";
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
   altaUsuarios(usuario){
    return this.http.post(`${this.url}AltaUsuario.php`,JSON.stringify(usuario));
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
}