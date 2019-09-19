import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AppService} from '../../app.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  heroId: any;
  heroObject: any = null;

  constructor(private activatedRoute: ActivatedRoute, private service: AppService) {
    this.activatedRoute.params.subscribe(params => {
      this.heroId = params['id'];
    });
  }

  ngOnInit() {
     this.getHeroObject(this.heroId);
  }

  /*BUSCA OS DETALHES DO HEROI CHAMANDO O METODO DO SERVICO*/

  getHeroObject(id){
    this.service.getHeroById(id).subscribe((res: any) => {
      this.heroObject = res.data.results[0];
    }, err => this.heroObject = false);
  }

}
