import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';
import {FormControl, FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  constructor(private clienteService: ClienteService, private formBuilder: FormBuilder) { }

  clientesList: Cliente[] = [];
  searchForm: FormGroup;

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      dtNascimento: '',
      dataRegistro: '',
      procedimento: ''
    });

    this.getClientes();
  }

  getClientes() {
    this.clienteService.clientes()
        .subscribe(
          clientes =>
            this.clientesList = clientes.data
        );
  }

  searchClientes(data) {
    this.clienteService.seachClientes(data)
      .subscribe(
        clientes =>
        this.clientesList = clientes.data
      );
  }

}
