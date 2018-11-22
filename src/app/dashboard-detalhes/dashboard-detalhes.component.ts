import { Component, OnInit } from '@angular/core';
import { ClientesServices } from '../ClientesServices/clientes.service';
import {Cliente} from '../ClientesServices/cliente'
@Component({
  selector: 'app-dashboard-detalhes',
  templateUrl: './dashboard-detalhes.component.html',
  styleUrls: ['./dashboard-detalhes.component.scss'],
  providers:[ClientesServices]
})
export class DashboardDetalhesComponent implements OnInit {
 private idUsuario:String;
 private cliente:Cliente;
  constructor(private services: ClientesServices) { }

  ngOnInit() {
    this.services.cast.subscribe( (dados) => {
     debugger;
      this.idUsuario = dados

    this.services.getClienteById(this.idUsuario).subscribe(dados => this.cliente = dados)
  
     })
  }

}
