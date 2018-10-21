import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../hero';
//import { HEROES } from '../mock-heroes';
import { HeroService } from '../../services/hero.service'; //Now the datas have been imported via hero service

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
	 selectedHero: Hero;
	heroes: Hero[];//via hero-service
//heroes = HEROES; // without any service

  constructor(private heroService: HeroService) { }

  ngOnInit() {
	 this.getHeroes();
  }
  onSelect(hero: Hero): void {
	  //alert(hero.name);
	  this.selectedHero = hero;
  }
  getHeroes(): void {
   	  //this.heroes = this.heroService.getHeroes();//original
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes); //Observable
        //by Observable.subscribe() asynchronous approach will work when the HeroService requests heroes from the server.
  }

}