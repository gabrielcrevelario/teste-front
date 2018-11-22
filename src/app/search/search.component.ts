import { Component, OnInit } from '@angular/core';
import { Cliente } from '../ClientesServices/cliente';
import { Saldo } from '../ClientesServices/saldo';
import {Observable } from 'rxjs';
import { ClientesServices } from '../ClientesServices/clientes.service';
import { FormsModule,ReactiveFormsModule}   from '@angular/forms';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [ ClientesServices ]
})
export class SearchComponent implements OnInit {
  public clientes: Observable<Cliente[]>
  constructor(private service: ClientesServices) { }

  ngOnInit() {
  }
  pesquisa(termoDaBusca: string)  {
   this.service.pesquisa(termoDaBusca);
   this.service.searchClient(termoDaBusca);
  }
}
