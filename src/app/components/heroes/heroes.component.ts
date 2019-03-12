import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interface/heroe.interface';
import { HeroesService } from '../../services/heroes.service';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes:any;
  loading:boolean=true;

  constructor(private heroesService:HeroesService) { 

    this.heroesService.getHeroes().subscribe(heroes => {
      console.log(heroes);
      this.heroes = heroes;
      this.loading=false;
    })
  }

  ngOnInit() {
  }

  borrarHeroe(key$:string){
    this.heroesService.borrarHeroe(key$)
    .subscribe(resp =>{
      if(resp){
        console.error(resp);
      }else{
        delete this.heroes[key$];
      }
    })
  }



}
