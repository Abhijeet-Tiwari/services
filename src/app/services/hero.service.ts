import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import {HeroDetail } from './heroDetail';
import { HEROESDETAIL } from './mockheroesDetail';

@Injectable()
export class HeroService {
    selectedHero: Hero[]= [];
	getHeroes(): Hero[] {
	   return HEROES;
	}
	getSelectedHero(): Hero[] {
	 return this.selectedHero;
	}

    addHero(id:number): void {
       let hero = HEROES.find(ob => ob.id === id);
       if (this.selectedHero.indexOf(hero) < 0) {	   
	      this.selectedHero.push(hero);
	   }
	}

	getHeroDetails(id:number) {

	}
}