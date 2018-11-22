import { Component, OnInit } from '@angular/core';
import { ClientesServices } from '../ClientesServices/clientes.service';
import {Cliente} from '../ClientesServices/cliente'
@Component({
  selector: 'app-dashboard-detalhes',
  templateUrl: './dashboard-detalhes.component.html',
  styleUrls: ['./dashboard-detalhes.component.scss']
})
export class DashboardDetalhesComponent implements OnInit {
 private clientes: Cliente[];
 public idUser:String;
 public back:Boolean;
  constructor(private service: ClientesServices) { }

  ngOnInit() {
    this.service.cast.subscribe( dados => {
     debugger;
      this.idUser = dados

    this.service.getClienteByIds(this.idUser).subscribe(dados => { 
      
      this.clientes = dados
      console.log(this.clientes);
    })
  
     })
  }

  voltar() {
    this.service.detalhesCliente(false);
  }

}
