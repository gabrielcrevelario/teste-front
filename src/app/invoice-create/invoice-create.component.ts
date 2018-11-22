import { Component, OnInit } from '@angular/core';
import {Nota} from '../ClientesServices/Nota';
import {ClientesServices} from '../ClientesServices/clientes.service';

@Component({
  selector: 'app-invoice-create',
  templateUrl: './invoice-create.component.html',
  styleUrls: ['./invoice-create.component.scss']
})
export class InvoiceCreateComponent implements OnInit {
 public notas: Nota[];
 public nota: Nota;
 public desabilitado: Boolean;
 public marcador:Boolean;
 public deleted:Boolean = false;
 public sucess:Boolean = false;
 public notaAfetadas:Nota[];
 public mostrar:Boolean;
 public idUser: string;
 public notasMock:any[];
 public btnSalvar:Boolean = false;
  constructor(public service:ClientesServices) { }

  ngOnInit() {
    this.service.cast.subscribe((idUser:string) =>{
      this.idUser = idUser; 
      debugger
      if(this.idUser !== "0") {
        this.notasMock = [{
          noNota:"5555",
          dataNota:"05555",
          valor:"55,66"
        },{
          noNota:"566666",
          dataNota:"888888",
          valor:"55,66"
        }]
      }

      this.service.getNotasByUser(this.idUser).subscribe(
        (dados) => {this.notas = dados
        
        console.log(this.notas)}
      )
      
    }
  )}


  disable();

disable() {
  if(this.notas === null) {
      this.desabilitado = true
  } else {
    this.desabilitado = false;
  }
}
mostrarLista() {
  debugger
    if(this.mostrar === true) {
      this.mostrar = false;
    } else {
      this.mostrar = true;
    }

}
salvar  () {
  this.sucess = true;
   this.btnSalvar = true;;

}
fecharSave() {
this.sucess =false;
}
fecharDelete() {
this.deleted = false;
}
marcar(nota){
  this.nota = nota;
  debugger
  this.marcador = true;
this.notaAfetadas.push(this.nota)
}
desmarcar(nota) {
  this.nota = nota;
  debugger
  this.marcador = false;
  let i = nota.indexOf()
this.notaAfetadas.splice(i,1)
}
    deletarNota() {
      this.deleted = true
      for(let afetada of this.notaAfetadas) {

        this.service.deleteNota(afetada.id)
      }
  
    }

    }
