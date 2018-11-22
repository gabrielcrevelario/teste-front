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
  cliente:Cliente;
 public clienteId:String;
  public termoDaBusca:any;
  
  constructor(private service: ClientesServices) { }

  ngOnInit() {
    this.service.list().subscribe(dados => this.clientes = dados);
    this.service.pes.subscribe((dados) => {
    debugger
      this.termoDaBusca = dados;
      this.service.pesquisa(this.termoDaBusca).subscribe(
        dados => this.clientes = dados)
        /*if(this.termoDaBusca.trim() === "" || this.termoDaBusca === null ) {
          this.service.list().subscribe(dados => this.clientes = dados);
        } else {
          return this.clientes;
        }*/
    
      })
  }


  loadNotaUser(cliente:Cliente){
    this.cliente = cliente;
   this.service.loadInformationClient(this.cliente.id);
  }
}
