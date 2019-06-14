import { Component, OnInit } from '@angular/core';
import { UsuariosService } from "./usuarios.service";
import { Router } from "@angular/router";
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
  usuarioRegister={
    nombre:null,
    email:null,
    password:null
  }
 LogedIn=false;
 testini=true;
 aux=0;
  constructor(private usuariosServicio:UsuariosService,private router: Router){
    
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
  cerrarSesion(){
    this.LogedIn=false;
    this.usuario.idUsuario=null;
    this.usuario.email=null;
    this.usuario.nombre=null;
    this.usuario.password=null;
    this.aux=0;
    alert('Sesión cerrada');
    this.router.navigate(['/home']);
  }

  SeleccionarUsuario(email,password){
    this.usuariosServicio.seleccionarUsuario(email,password).subscribe(
      result=>{this.usuario=result[0];
        this.changeLoged();
      },
      error=>{
        alert('usuario o contraseña incorrecto')
      },
      
     
      
    
      
    );
    
    
  }
  changeLoged(){
    if(this.testini){
      
     // document.getElementById("ini").click();
      this.testini=false;
    }
    if(this.usuario.idUsuario!=null){
    this.LogedIn=true;
    document.getElementById("cerrarModal").click();
    }else if(this.aux==0){
      alert('Usuario o contraseña incorrecto');
      this.aux=1;
    }
    if(this.aux==3){
      alert('Usuario o contraseña incorrecto');
      this.aux=1;
    }
    this.aux++;
  }
  obtenerUsuarios() {
    this.usuariosServicio.obternerUsuarios().subscribe(
      result => this.usuarios = result,
      
    );
  }
 
  AltaUsuario() {
    this.usuariosServicio.altaUsuarios(this.usuarioRegister).subscribe(
      datos => {
        if(datos['resultado'] == 'OK') {
          alert(datos['mensaje']);
        }
      }
    );
    document.getElementById('botoncerrar2').click();
  }
 
  
}
