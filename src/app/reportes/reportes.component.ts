import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {
  private articulos = null;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    
  }
  listar() {
    return this.http.get('bd.php');
  }

}
