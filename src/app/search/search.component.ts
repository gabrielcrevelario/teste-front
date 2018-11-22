import { Component, OnInit } from '@angular/core';
import { Cliente } from '../ClientesServices/cliente';
import { Saldo } from '../ClientesServices/saldo';
import {Observable } from 'rxjs';
import { ClientesServices } from '../ClientesServices/clientes.service';
import { FormsModule,ReactiveFormsModule}   from '@angular/forms';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public termoDaBusca:String;
  public clientes: Observable<Cliente[]>
  constructor(private service: ClientesServices) { }

  ngOnInit() {
  }

  pesquisa(termoDaBusca: String)  {
    this.termoDaBusca = termoDaBusca;
   
   this.service.buscarCLiente(this.termoDaBusca);
  }
}
