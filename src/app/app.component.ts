import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { ClientesServices } from './ClientesServices/clientes.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  detalhesDeClientes:Boolean = false;
  faCoffee = faCoffee;

  constructor(private service: ClientesServices) {}

  ngOnInit() {
    this.service.clienteDetail.subscribe(
      detalhes => this.detalhesDeClientes = detalhes
    );
     
  }
}
