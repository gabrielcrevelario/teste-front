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
    bool = new BehaviorSubject<boolean>(false);
    pesquisar = new BehaviorSubject<any>("a");
    cast = this.cli.asObservable();
    pes = this.pesquisar.asObservable();
    cast3 = this.bool.asObservable();

    constructor(private http: HttpClient) {}
     cliente: Cliente;
      
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
    getClienteByIds(idCliente: String) {
        return this.http.get<Cliente[]>(this.URI + "/clientes?id="+ idCliente)
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
        detalhesCliente(booleano) {
            this.bool.next(booleano);
        }
        transferDatesforNota(notaList) {
            this.not.next(notaList);
        }


        buscarCLiente(termoDeBusca) {
            this.pesquisar.next(termoDeBusca);

        }
   
        deleteNota(idNota:String) {
            return this.http.delete<Nota>(`${this.URI}/notas/${idNota}`)
        }
        createNota(nota:Nota) {
            debugger
            return this.http.post<Nota>(`${this.URI}/notas`,JSON.stringify({nota}));
        }


        pesquisa(termo:String){
        debugger
        return this.http.get<Cliente[]>(`${this.URI}/clientes?email_like=${termo}`) 
       
        }

    
 
}