import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder} from '@angular/forms';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private clienteService: ClienteService) { }

  cadastrarClienteForm: FormGroup;
  maskData: any = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
  maskTelefone: any = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  ngOnInit() {
    this.cadastrarClienteForm = this.formBuilder.group({
      nome: '',
      sobrenome: '',
      idade: '',
      telefone: '',
      ddd: '',
      dtNascimento: '',
      email: '',
      procedimento: ''
    });
  }

  cadastrar(model: Cliente) {
    this.clienteService.cadastrar(model)
        .subscribe(
          cliente => {
            Swal('Cadastro efetuado com sucesso!', '', 'success');
          },
          errors => {
            Swal('Erro ao cadastrar', '', 'error');
          }
        );
  }
}
