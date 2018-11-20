import { HttpClient } from '@angular/common/http';
import { Cliente } from './cliente';
import { Saldo } from './saldo';
import {Injectable,EventEmitter} from '@angular/core';

@Injectable({
    providedIn:'root'
})
export class ClientesServices {
    constructor(private http: HttpClient) {}
     cliente: Cliente;
      carregarDetalhesDeClientes = new EventEmitter<any>();
     clienteDetail = new EventEmitter<Boolean>();
    private readonly URI = "http://localhost:3000";
    list() {
   debugger 
       return this.http.get<Cliente[]>(this.URI + "/clientes/");
    }


    getClienteById(idCliente: String) {
       return this.http.get<Cliente>(this.URI + "/clientes/"+idCliente)
    }
    getSaldoById(idSaldo: String) {
        this.http.get<Saldo[]>(`${this.URI}/saldos/${idSaldo}`)
    }

    clienteLoad(){
        this.clienteDetail.emit(true);
        return this.carregarDetalhesDeClientes.emit(this.cliente);
    }

}