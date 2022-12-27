import { Component } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  constructor( private heroService: HeroesService ) {

  }

  ngOnInit(): void{
    this.heroService.getHeroes()
      .subscribe( resp => console.log(resp))
  }
}
