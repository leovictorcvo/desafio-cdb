import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { RetornoDaSimulacao } from './../models/RetornoDaSimulacao';
import { DadosParaSimulacao } from './../models/DadosParaSimulacao';

@Injectable({
  providedIn: 'root'
})
export class CdbService {

  constructor(private httpClient: HttpClient) { }

  public obterDadosDaSimulacao(data: DadosParaSimulacao): Observable<RetornoDaSimulacao> {
    const baseUrl = 'https://localhost:5001/cdb';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.httpClient.post<RetornoDaSimulacao>(baseUrl, data, httpOptions).pipe(take(1));
  }
}
