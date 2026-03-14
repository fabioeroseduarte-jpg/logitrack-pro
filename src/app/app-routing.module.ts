import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importar os componentes que terão rotas
import { ManutencaoListComponent } from './components/manutencao-list/manutencao-list.component';
import { ManutencaoFormComponent } from './components/manutencao-form/manutencao-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/manutencoes', pathMatch: 'full' }, // rota padrão
  { path: 'manutencoes', component: ManutencaoListComponent }, // lista de manutenções
  { path: 'manutencoes/nova', component: ManutencaoFormComponent }, // formulário de cadastro
  { path: '**', redirectTo: '/manutencoes' } // fallback para rotas inválidas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
