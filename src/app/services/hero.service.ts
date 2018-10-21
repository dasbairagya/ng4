import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';//Observable is one of the key classes in the RxJS library. Angular's HttpClient methods return RxJS Observables.
import { Hero } from './../hero';
import { HEROES } from './../mock-heroes';
//import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class HeroService {
	constructor() { /*private messageService: MessageService */}
//for local dummy data fatching
// getHeroes(): Hero[] { 
//   return HEROES;
// }

//for server data fatching
getHeroes(): Observable<Hero[]> { //getting data from the server with the RxJS of() function.

    //this.messageService.add('HeroService: fetched heroes');    // TODO: send the message _after_ fetching the heroes
  return of(HEROES); //of(HEROES) returns an Observable<Hero[]> that emits a single value, the array of mock heroes.
}
  
}
