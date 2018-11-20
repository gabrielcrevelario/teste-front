import { Component, OnInit } from '@angular/core';
import { ClientesServices } from '../ClientesServices/clientes.service';
import { Saldo} from '../ClientesServices/saldo';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  saldos:Saldo[];
  constructor(private service:ClientesServices) { }

  ngOnInit() {
  } 
  if(clienteLoad) {
    debugger
    
  }

}
