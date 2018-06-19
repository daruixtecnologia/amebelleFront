import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {ROUTES} from './app.routes';
import { AppComponent } from './app.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ListarComponent } from './cliente/listar/listar.component';
import { CadastrarComponent } from './cliente/cadastrar/cadastrar.component';

import {MatMenuModule} from '@angular/material/menu';
import { HeaderComponent } from './header/header.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import { TextMaskModule } from 'angular2-text-mask';
import { ClienteService } from './cliente/cliente.service';

import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    ListarComponent,
    CadastrarComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules}),
    SweetAlert2Module.forRoot(),
    HttpClientModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule,
    NgxDatatableModule
  ],
  providers: [
    ClienteService
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
