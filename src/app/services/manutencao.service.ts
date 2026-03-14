import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Manutencao } from '../models/manutencao';

@Injectable({
  providedIn: 'root'
})
export class ManutencaoService {
  private apiUrl = 'http://localhost:8080/api/manutencoes'; // ajuste conforme seu backend

  constructor(private http: HttpClient) {}

  listar(): Observable<Manutencao[]> {
    return this.http.get<Manutencao[]>(this.apiUrl);
  }

  criar(manutencao: Manutencao): Observable<Manutencao> {
    return this.http.post<Manutencao>(this.apiUrl, manutencao);
  }

  atualizar(id: number, manutencao: Manutencao): Observable<Manutencao> {
    return this.http.put<Manutencao>(`${this.apiUrl}/${id}`, manutencao);
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
