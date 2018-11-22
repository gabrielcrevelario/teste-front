import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { ClientesServices } from './ClientesServices/clientes.service';
import { Cliente } from './ClientesServices/cliente';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[ClientesServices]
})
export class AppComponent {
  detalhesDeClientes:Boolean = false;
  private cliente:Cliente;
 private idUser;
  constructor(private service: ClientesServices) {}

  ngOnInit() {
    this.service.cast3.subscribe(bool => 
      this.detalhesDeClientes = bool
    )

    this.service.cast.subscribe(

    (idUser) => {
      this.idUser = idUser;
      this.service.getClienteById(this.idUser).subscribe(
        (dados) => {
       
          this.cliente = dados
        
          if(this.idUser !== "0") {
            this.detalhesDeClientes = true;
          } else {
            this.detalhesDeClientes = false;
          }
        
        
        }

      
  )
})}

}
