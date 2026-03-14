import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Manutencao } from '../../models/manutencao';
import { ManutencaoService } from '../../services/manutencao.service';

@Component({
  selector: 'app-manutencao-form',
  templateUrl: './manutencao-form.component.html'
})
export class ManutencaoFormComponent {
  manutencao: Manutencao = {
    veiculoId: 0,
    dataInicio: '',
    tipoServico: '',
    custoEstimado: 0,
    status: 'PENDENTE'
  };

  constructor(private manutencaoService: ManutencaoService,
              private router: Router) {}

  salvar() {
    this.manutencaoService.criar(this.manutencao).subscribe({
      next: () => {
        alert('Manutenção salva com sucesso!');
        this.router.navigate(['/manutencoes']);
      },
      error: (err) => {
        console.error(err);
        alert('Erro ao salvar manutenção.');
      }
    });
  }

  voltar() {
    this.router.navigate(['/manutencoes']);
  }
}
