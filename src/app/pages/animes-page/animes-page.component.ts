import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AnimeService } from '../../services/anime.service';
import { Subject, debounceTime, mergeMap } from 'rxjs';


@Component({
  selector: 'app-animes-page',
  templateUrl: './animes-page.component.html',
  styleUrls: ['./animes-page.component.scss']
})
export class AnimesPageComponent implements OnInit {
  public animes: any[] = []
  public searchControl = new FormControl('')
  public form = new FormGroup({
    search: this.searchControl,
  });
  // constructor(private animeService: AnimeService) {
    // this.animeService.searchAnime('naruto').subscribe(console.log)

    //agrego la funcion pipe (paso antes del subscribe), y adentro el operador debounceTime, lo q hace es q no se genere 
    //una peticion a la api por cada letra q ingrese, sino q hace la peticion cada 1seg en este caso
  //   this.searchControl.valueChanges.pipe(debounceTime(1000)).subscribe((valor) => valor && this.animeService.searchAnime(valor).subscribe(console.log))
  //  }
  constructor(private animeService: AnimeService) {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(1000),
        mergeMap((value) => this.animeService.searchAnime(value!))
      ).subscribe((results) => this.animes = results)
  }

  ngOnInit(): void {
  }

}
