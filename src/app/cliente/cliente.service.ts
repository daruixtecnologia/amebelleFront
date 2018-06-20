import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { API_ROUTE } from '../app.api';
import { Cliente } from './cliente.model';
import {URLSearchParams} from '@angular/http';

@Injectable()
export class ClienteService {

  constructor(private http: HttpClient) {}

  cadastrar(model) {
    return this.http.post<Cliente>(`${API_ROUTE}/cliente/addCliente`, model);
  }

  clientes() {
    return this.http.get<any>(`${API_ROUTE}/cliente/`);
  }

  seachClientes(data) {
    const params = new HttpParams()
                  .set('dtNascimento', data.dtNascimento)
                  .set('dataRegistro', data.dataRegistro)
                  .set('procedimento', data.procedimento);
    return this.http.get<any>(`${API_ROUTE}/cliente/clientes`, {params});
  }
}
