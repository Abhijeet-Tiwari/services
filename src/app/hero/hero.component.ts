import { Component, OnInit } from '@angular/core';
import { Hero } from '../services/hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'hero-app',
  templateUrl: './hero.component.html', 
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit { 
   heroes: Hero[] = [];
   constructor(private heroService: HeroService) { }
   getHeroes(): void {
        this.heroes = this.heroService.getHeroes();
   }
   ngOnInit(): void {
        this.getHeroes();
   }
   addHeroToList(id:number): void {
	    this.heroService.addHero(id);
   }
}
    