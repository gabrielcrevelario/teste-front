import { Component, OnInit } from '@angular/core';
import { ClientesServices } from '../ClientesServices/clientes.service';
import { Saldo} from '../ClientesServices/saldo';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  public saldos:Saldo[];
  public idUser: String;
  public getSaldo 
  constructor(private service:ClientesServices) { }

  ngOnInit() {
        this.service.cast.subscribe((idUser) => {
          this.idUser = idUser;
          
      this.service.getSaldoByIdUsuario(this.idUser).subscribe( dados => this.saldos = dados);})



}
}
