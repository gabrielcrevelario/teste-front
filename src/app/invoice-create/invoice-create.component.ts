import { Component, OnInit } from '@angular/core';
import {Nota} from '../ClientesServices/Nota';
import {ClientesServices} from '../ClientesServices/clientes.service';
import { disableBindings } from '../../../node_modules/@angular/core/src/render3';
@Component({
  selector: 'app-invoice-create',
  templateUrl: './invoice-create.component.html',
  styleUrls: ['./invoice-create.component.scss']
})
export class InvoiceCreateComponent implements OnInit {
 public notas: Nota[];
 public nota: Nota;
 public marcador:Boolean;
 public notaAfetadas:Nota[];
 public mostrar:Boolean = false;
 public idUser: string;
 public btnSalvar:Boolean = false;
  constructor(public service:ClientesServices) { }

  ngOnInit() {
    this.service.cast.subscribe((idUser:string) =>{
    this.idUser = idUser; 
    debugger
      this.service.getNotasByUser(this.idUser).subscribe(
        dados => this.notas = dados
      )

}
)}

mostrarLista() {
  debugger
    if(this.mostrar) {
      this.mostrar = false;
    } else {
      this.mostrar = true;
    }

}
salvar  () {
   this.btnSalvar = true;;

}
marcar(nota){
  this.marcador = true;
this.notaAfetadas.push(nota)
}
desmarcar(nota) {
  debugger
  this.marcador = false;
  let i = nota.indexOf()
this.notaAfetadas.splice(i,1)
}
    deletarNota() {
      for(let afetada of this.notaAfetadas) {

        this.service.deleteNota(afetada.id)
      }
  
    }

    }
