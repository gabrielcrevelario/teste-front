import { HttpClient } from '@angular/common/http';
import { Cliente } from './cliente';
import { Saldo } from './saldo';
import { Nota } from './nota';
import {Injectable,EventEmitter} from '@angular/core';
//import { Observable, Subject  } from 'rxjs'
import { Observable, Subject, BehaviorSubject  } from 'rxjs'

import { retry } from 'rxjs/operators';
import { map} from 'rxjs/operators';
import 'rxjs/add/operator/toPromise'
import 'rxjs/add/operator/retry'
@Injectable({
    providedIn:'root'
})
export class ClientesServices {
 
    cli = new BehaviorSubject<any>("0");
    not = new BehaviorSubject<any>("0");
    search = new BehaviorSubject<any>("");
    cast = this.cli.asObservable();
    cast2 = this.search.asObservable();
    cast3 = this.search.asObservable();

    constructor(private http: HttpClient) {}
     cliente: Cliente;
      carregarDetalhesDeClientes = new EventEmitter<any>();
     clienteDetail = new EventEmitter<Boolean>();
    private  URI:string = "http://localhost:3000";
    list() {
    
       return this.http.get<Cliente[]>(this.URI + "/clientes/");
    }

    getNotasByUser(idCliente: String) {
        return this.http.get<Nota[]>(this.URI+"/notas?usuario=" + idCliente)
    }  
    getClienteById(idCliente: String) {
       return this.http.get<Cliente>(this.URI + "/clientes?id="+ idCliente)
    }
    getSaldoByIdUsuario(idUsuario: String) {
        
        return this.http.get<Saldo[]>(this.URI+"/saldos?usuario="+idUsuario)
       /*
      eturn this.http.get<Saldo[]>( `${this.URI}/saldos?usuario=${idUsuario}` ).pipe(
            map((resposta: any)=> resposta.json()),retry(5)
        )
    */ }

        getNotas() {
            debugger
            return this.http.get<Nota[]>(this.URI +"/notas");
        }
 
        loadInformationClient(clickCliente) {
            this.cli.next(clickCliente);

        }
        transferDatesforNota(notaList) {
            this.not.next(notaList);
        }


        searchClient(searchCliente) {
            this.search.next(searchCliente);

        }
   
        deleteNota(idNota:String) {
            return this.http.delete<Nota>(`${this.URI}/notas/${idNota}`)
        }
        createNota(nota:Nota) {
            debugger
            return this.http.post<Nota>(`${this.URI}/notas`, nota);
        }


        pesquisa(termo:string){
        
        return this.http.get<Cliente[]>(this.URI + "/clientes?email_like=" + termo) 
       
        }

    
 
}