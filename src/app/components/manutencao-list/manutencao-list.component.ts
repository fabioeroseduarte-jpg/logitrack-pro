import { Component, OnInit } from '@angular/core';
import { Manutencao } from '../../models/manutencao';
import { ManutencaoService } from '../../services/manutencao.service';

@Component({
  selector: 'app-manutencao-list',
  templateUrl: './manutencao-list.component.html'
})
export class ManutencaoListComponent implements OnInit {
  manutencoes: Manutencao[] = [];

  constructor(private manutencaoService: ManutencaoService) {}

  ngOnInit(): void {
    this.manutencaoService.listar().subscribe({
      next: (data) => this.manutencoes = data,
      error: (err) => console.error('Erro ao carregar manutenções', err)
    });
  }

  editar(item: Manutencao) {
    // navegação ou lógica de edição
  }

  excluir(item: Manutencao) {
    if (item.id) {
      this.manutencaoService.excluir(item.id).subscribe({
        next: () => {
          this.manutencoes = this.manutencoes.filter(m => m.id !== item.id);
        },
        error: (err) => console.error('Erro ao excluir manutenção', err)
      });
    }
  }
}
