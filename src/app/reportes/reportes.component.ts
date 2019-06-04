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
    doc.text("nombre         |   telefono        |      cantidad      |      descripcion ",30,20);
    var i=40;
   this.pedidosSem.forEach(function (value) {
    var text=("NOMBRE: "+value.nombre+" TELEFONO: "+value.telefono+" CANTIDAD: "+value.cantidad+" DESCRIPCION: "+value.descripcion);
    var split = doc.splitTextToSize(text, 180);
    doc.text(split,10,i);
    i=i+20;
  
  });
  
    doc.save('test.pdf');
   
}
generarPDFMes(){
  var doc = new jsPDF();
  doc.text("nombre         |   telefono        |      cantidad      |      descripcion ",30,20);
  var i=40;
 this.pedidosMes.forEach(function (value) {
  var text=("NOMBRE: "+value.nombre+" TELEFONO: "+value.telefono+" CANTIDAD: "+value.cantidad+" DESCRIPCION: "+value.descripcion);
  var split = doc.splitTextToSize(text, 180);
  doc.text(split,10,i);
  i=i+20;

});

  doc.save('test.pdf');
  
}
  

}
