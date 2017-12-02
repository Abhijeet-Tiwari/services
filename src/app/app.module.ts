import {BrowserModule} from '@angular/platform-browser';
import {NgModule}      from '@angular/core';

import {HeroComponent}  from './hero/hero.component';

import {ListComponent}  from './list/list.component';
import {AppComponent}  from './app.component';
import {HeroService} from './services/hero.service';

import { HerodetailComponent } from './herodetail/herodetail.component';


@NgModule({
  imports: [     
        BrowserModule
  ],
  declarations: [
        AppComponent, 
		HeroComponent,
		ListComponent,
		HerodetailComponent
  ],
  providers: [
        HeroService
  ],
  bootstrap: [
        AppComponent
  ]
})
export class AppModule { }
