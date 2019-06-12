import { Component, OnInit } from '@angular/core';
import { UsuariosService } from "../usuarios.service";
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {
  pedidosSem = null;
  pedidosMes=null;
  constructor(private usuariosServicio:UsuariosService) { }

  ngOnInit() {    
    this.generarReporteMensual();
    this.generarReporteSemanal();
  }
  generarReporteSemanal() {
    this.usuariosServicio.obternerPedidosSemanal().subscribe(
      result => this.pedidosSem= result,
    );
    
  }
  semana(){
   
    this.generarPDF();
  }
  mes(){

    this.generarPDFMes();
  }
  generarReporteMensual(){
    this.usuariosServicio.obternerPedidosMensual().subscribe(
      result => this.pedidosMes= result,
    );
    
  }

  generarPDF(){
    var doc = new jsPDF();
     var i=40;
     var num=1;
   this.pedidosSem.forEach(function (value) {
    var text=("PEDIDO:"+num);
    var split = doc.splitTextToSize(text, 180);
    doc.text(split,10,i);
    i=i+10;
    var text=("NOMBRE: "+value.nombre);
    var split = doc.splitTextToSize(text, 180);
    doc.text(split,10,i);
    i=i+10;
    var text=("TELÉFONO: "+value.telefono);
    var split = doc.splitTextToSize(text, 180);
    doc.text(split,10,i);
    i=i+10;
    var text=("CANTIDAD: "+value.cantidad);
    var split = doc.splitTextToSize(text, 180);
    doc.text(split,10,i);
    i=i+10;
    var text=("DESCRIPCIÓN: "+value.descripcion);
    var split = doc.splitTextToSize(text, 180);
    doc.text(split,10,i);
    i=i+20;
    num++;
  });
  
    doc.save('ReporteSemanal.pdf');
   
}
generarPDFMes(){
  var doc = new jsPDF();
   var i=40;
   var num=1;
 this.pedidosMes.forEach(function (value) {
  var text=("PEDIDO:"+num);
  var split = doc.splitTextToSize(text, 180);
  doc.text(split,10,i);
  i=i+10;
  var text=("NOMBRE: "+value.nombre);
    var split = doc.splitTextToSize(text, 180);
    doc.text(split,10,i);
    i=i+10;
    var text=("TELÉFONO: "+value.telefono);
    var split = doc.splitTextToSize(text, 180);
    doc.text(split,10,i);
    i=i+10;
    var text=("CANTIDAD: "+value.cantidad);
    var split = doc.splitTextToSize(text, 180);
    doc.text(split,10,i);
    i=i+10;
    var text=("DESCRIPCIÓN: "+value.descripcion);
    var split = doc.splitTextToSize(text, 180);
    doc.text(split,10,i);
    i=i+20;
  num++;
});

  doc.save('reporteMensual.pdf');
  
}
  

}
