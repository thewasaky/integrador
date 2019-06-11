import { Component, OnInit } from '@angular/core';
import { UsuariosService } from "../usuarios.service";
import { ActivatedRoute, Params } from '@angular/router';
import * as jsPDF from 'jspdf';

declare var jQuery:any;
declare var $:any;


@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  pedidos=null;
  pedido={
    idUsuario:null,
    nombre:null,
    telefono:null,
    cantidad:null,
    descripcion:null
  }
  constructor(private usuariosServicio:UsuariosService, private rutaActiva: ActivatedRoute) { 
    this.pedido.idUsuario=this.rutaActiva.snapshot.params.idUsuario;
  }
  generarPDF(){
    var doc = new jsPDF();
   
    doc.text("nombre         |   telefono        |      cantidad      |      descripcion ",30,20);
    var i=40;
  /* this.pedidos.forEach(function (value) {
    var text=("NOMBRE: "+value.nombre+" TELEFONO: "+value.telefono+" CANTIDAD: "+value.cantidad+" DESCRIPCION: "+value.descripcion);
    var split = doc.splitTextToSize(text, 180);
    doc.text(split,10,i);
    i=i+20;
  
  });*/
  doc.fromHTML($('#cont').html(), 15, 15, {
    'width': 1800
});
    doc.save('test.pdf');
    
 
}
  ngOnInit() {
    this.obtenerPedidos();
  }
  AltaPedido() {
    this.usuariosServicio.altaPedido(this.pedido).subscribe(
      datos => {
        if(datos['resultado'] == 'OK') {
          alert(datos['mensaje']);
          this.obtenerPedidos();
        }
      }
    );
    
  }
  obtenerPedidos() {
    this.usuariosServicio.obternerPedidos().subscribe(
      result => this.pedidos = result,
      
    );
    
  }
  bajaPedido(idPedido) {
    
    this.usuariosServicio.bajaPedido(idPedido).subscribe(
      datos => {
        if(datos['resultado'] == 'OK') {
          alert(datos['mensaje']);
          this.obtenerPedidos();
        }else if(datos['resultado']=='NO OK'){
             alert(datos['mensaje']);
        }
      }
    )
    ;
  }
  

}
