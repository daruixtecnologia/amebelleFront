import { RouterModule, Routes } from '@angular/router';

import { ListarComponent } from './cliente/listar/listar.component';
import { CadastrarComponent } from './cliente/cadastrar/cadastrar.component';
import { ClienteComponent } from './cliente/cliente.component';

export const ROUTES: Routes = [
  {path: '', component: ClienteComponent, children: [
    {path: 'listar', component: ListarComponent},
    {path: 'cadastrar', component: CadastrarComponent}
  ]}
];
