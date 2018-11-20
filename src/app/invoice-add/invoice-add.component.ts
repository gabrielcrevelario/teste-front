import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-invoice-add',
  templateUrl: './invoice-add.component.html',
  styleUrls: ['./invoice-add.component.scss']
})
export class InvoiceAddComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

public payments:string[] = ["Dinheiro", "Cartão de Credito", "Cartão de Debito"];


}
