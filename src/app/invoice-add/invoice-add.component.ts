import { Component, OnInit } from '@angular/core';
import { ClientesServices } from '../ClientesServices/clientes.service';
import { Nota } from '../ClientesServices/Nota';
import { FormsModule}   from '@angular/forms';
@Component({
  selector: 'app-invoice-add',
  templateUrl: './invoice-add.component.html',
  styleUrls: ['./invoice-add.component.scss'],
  providers: [ClientesServices]
})
export class InvoiceAddComponent implements OnInit {
  public nota:Nota
  public notas:Nota[];
  public idUser:String;
  constructor(private service:ClientesServices) { }

  ngOnInit() {
    this.service.cast.subscribe(
      dados => {this.idUser = dados
      this.service.getNotas().subscribe(dados => 
      this.notas = dados)}
    )
  }

  salvar(form) {
    debugger
    this.nota = form;
    let id = this.notas.length + 1;
    this.nota.id = id.toString()
    this.nota.usuario = this.idUser;
    this.service.createNota(this.nota);
  }
public payments:string[] = ["Dinheiro", "Cartão de Credito", "Cartão de Debito"];


}
