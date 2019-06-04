import { Component, OnInit } from '@angular/core';
import { UsuariosService } from "./usuarios.service";
import * as jsPDF from 'jspdf';
//import  html2canvas from 'html2canvas';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  usuarios=null;
  usuario={
    idUsuario:null,
    nombre:null,
    email:null,
    password:null
  }
  
 
  constructor(private usuariosServicio:UsuariosService){
    
  }
  generarPDF(){

    
   
      var doc = new jsPDF();
      var i=20;
      
     this.usuarios.forEach(function (value) {
      doc.text(value.nombre+" "+value.email+" ",30,i);
      i=i+10;
    });
      
      doc.save('test.pdf');
      
   
}
  ngOnInit(){
   this.obtenerUsuarios();
  }

  SeleccionarUsuario(email,password){
    this.usuariosServicio.seleccionarUsuario(email,password).subscribe(
      result=>this.usuario=result[0]
    );
  }

  obtenerUsuarios() {
    this.usuariosServicio.obternerUsuarios().subscribe(
      result => this.usuarios = result,
      
    );
  }
  login(){
    if(this.usuario.nombre!=null){
      return true;
    }else{
      return false;
    }
  }
  
}
