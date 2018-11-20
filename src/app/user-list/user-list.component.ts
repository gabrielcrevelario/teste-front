import { Component, OnInit } from '@angular/core';
import { ClientesServices } from '../ClientesServices/clientes.service';
import { Cliente } from '../ClientesServices/cliente';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  clientes: Cliente[];
  
  
  constructor(private service: ClientesServices) { }

  ngOnInit() {
    this.service.list().subscribe(dados => this.clientes = dados);
  }
  loadNotaUser(clienteId:String) {
    this.service.getClienteById(clienteId).subscribe(dado =>this.service.cliente = dado);
    this.service.clienteLoad();
 
}
}
