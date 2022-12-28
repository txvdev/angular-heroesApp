import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit{

  heroes:Heroe[] = [];

  constructor( private heroService: HeroesService ) {

  }

  ngOnInit(): void{
    this.heroService.getHeroes()
      .subscribe( heroes => {
        this.heroes = heroes;
      })
  }
}
