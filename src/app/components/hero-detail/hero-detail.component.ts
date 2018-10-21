import { Component, OnInit, Input } from '@angular/core';//Amend the @angular/core import statement to include the Input symbol.
import { Hero } from '../../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;//Add a hero property, preceded by the @Input() decorator.

  constructor() { }

  ngOnInit() {
  }

}