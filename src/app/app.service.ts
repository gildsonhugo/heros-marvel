import { Injectable } from '@angular/core';
import {Md5} from 'ts-md5';
import {HttpClient} from '@angular/common/http';

/*PARAMETROS DE CONFIGURACAO DE AUTH*/

const API_BASE_URL = 'http://gateway.marvel.com/v1/public';
const PUBLIC_KEY = 'c0489a3d02c0467470ef1a5d3a181105';
const PRIVATE_KEY = 'cec823ee9111b54486cf681dc64290637eca2077';

@Injectable({
  providedIn: 'root'
})

export class AppService {

  /*MONTA O PEDACO DA URL QUE GERA AUTENTICACAO*/

  get urlAuth(){
    const time = new Date().getTime();
    return `?ts=${time}&apikey=${PUBLIC_KEY}&hash=${Md5.hashStr(time + PRIVATE_KEY + PUBLIC_KEY )}`;
  }

  constructor(private http: HttpClient) { }


  /*BUSCA A LISTA DOS HEROIS NA API DE ACORDO COM A PAGINA, LIMITE E PARAMETROS DE BUSCA*/

  getHerosList(limit, page, search = null){
    let searchName = search ? `&nameStartsWith=${search}` : '';
    return this.http.get(`${API_BASE_URL}/characters${this.urlAuth}&limit=${limit}&offset=${page * limit}${searchName}`);
  }

  /*BUSCA OS DETALHES DO HEROI PELO ID NA API*/
  getHeroById(id){
    return this.http.get(`${API_BASE_URL}/characters/${id}${this.urlAuth}`);
  }

}
