import {Component, HostListener, OnInit} from '@angular/core';
import {AppService} from '../app.service';
import { Subject } from 'rxjs';
import {debounceTime, distinctUntilChanged} from 'rxjs/internal/operators';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss']
})
export class HerosComponent implements OnInit {

  /* LISTENER DE SCROLL PARA O INFINITE SCROLL */
  @HostListener('window:scroll', [])
  onScroll(): void {
    this.verifyScrollPosision();
  }

  herosList: any[] = [];

  searchParams: any = '';
  searchSubject: Subject<string> = new Subject<string>();

  actualPage = 0;
  limit = 8;

  loadingList = false;

  maxLengh = 0;

  constructor(private service: AppService) {
    /* CONFIGURACAO DO TIMEOUT APOS DIGITAR NO INPUT DE SEARCH */
    this.searchSubject.pipe(debounceTime(300), distinctUntilChanged()).subscribe(val => {
      this.searchParams = val;
      this.actualPage = 0;
      this.herosList = [];
      this.getHerosListFromService(this.limit, this.actualPage, this.searchParams);
    });
  }

  ngOnInit() {
    this.getHerosListFromService(this.limit, this.actualPage, this.searchParams);
  }

  /* BUSCA OS HEROIS CHAMANDO O METODO DE BUSCA DO SERVICO, USANDO AS VARIAVEIS DO COMPONENTE COMO PARAMETROS */
  getHerosListFromService(limit, page, search) {
    if (!this.loadingList) {
      this.loadingList = true;
      this.service.getHerosList(limit, page, search).subscribe((res: any) => {
        this.herosList = this.herosList.concat(res.data.results);
        this.maxLengh = res.data.total;
      }, err => {
      }, () => {
        this.loadingList = false;
        this.verifyScrollPosision();
      });
    }
  }

  /* VERIFICA A POSICAO DO SCROLL PARA INCREMENTAR UMA PAGINA E BUSCA MAIS HEROIS*/
  verifyScrollPosision() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && this.actualPage * this.limit <= this.maxLengh) {
      this.actualPage++;
      this.getHerosListFromService(this.limit, this.actualPage, this.searchParams);
    }
  }

  /* EVENTO DE BIND NO SUBJECT QUANDO O MODEL DE SEARCH MUDA DE VALOR */
  searchHeroes(event) {
    this.searchSubject.next(event);
  }

}
