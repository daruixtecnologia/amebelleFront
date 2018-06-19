import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  constructor(private clienteService: ClienteService) { }

  clientesList: Cliente[] = [];

  ngOnInit() {
    this.getClientes();
  }

  getClientes() {
    this.clienteService.clientes()
        .subscribe(
          clientes =>
            this.clientesList = clientes.data
        );
  }

}
