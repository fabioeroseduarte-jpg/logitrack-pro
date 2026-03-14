export interface Manutencao {
  id?: number;
  veiculoId: number;
  dataInicio: string;
  dataFinalizacao?: string;
  tipoServico: string;
  custoEstimado: number;
  status: 'PENDENTE' | 'EM_REALIZACAO' | 'CONCLUIDA';
}
