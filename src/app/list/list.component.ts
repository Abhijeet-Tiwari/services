import { Component, OnInit } from '@angular/core';

import { Hero } from '../services/hero';
import { HeroService } from '../services/hero.service';
// /import { HeroDetail } from '../detailservices/heroDetail';
//import { HeroDetailService } from '../detailservices/heroDetail.service';
import { HeroDetail } from '../services/heroDetail';
import { HEROESDETAIL } from '../services/mockheroesDetail';

@Component({
  selector: 'list-app',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  listHeroes: Hero[] = [];
  selectedHero: any = {};

  constructor(private heroService: HeroService) { }
  getHeroesForList(): void {
    this.listHeroes = this.heroService.getSelectedHero();
  }

  onChange(event) {
    console.log(event.target.value);
    
    for(var i=0; i<HEROESDETAIL.length; i++){
        if(HEROESDETAIL[i].id == event.target.value ){
          this.selectedHero = HEROESDETAIL[i];
          break;
        }
    }
  }

  ngOnInit(): void {
    this.getHeroesForList();
  }
}

