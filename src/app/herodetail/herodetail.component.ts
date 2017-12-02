import { Component, OnInit } from '@angular/core';

import { HeroDetail } from '../services/heroDetail';
import { HEROESDETAIL } from '../services/mockheroesDetail';

@Component({
  selector: 'app-herodetail',
  templateUrl: './herodetail.component.html',
  styleUrls: ['./herodetail.component.css']
})
export class HerodetailComponent implements OnInit {
  heroesDetail: HeroDetail[];
  constructor(private heroDetail: HeroDetail) { }
  ngOnInit() {
  }
}