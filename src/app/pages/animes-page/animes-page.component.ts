import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AnimeService } from '../../services/anime.service';
import { Subject } from 'rxjs';


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
  constructor(private animeService: AnimeService) {
    this.animeService.searchAnime('naruto').subscribe(console.log)

    this.searchControl.valueChanges.subscribe((valor) => valor && this.animeService.searchAnime(valor).subscribe(console.log))
   }

  ngOnInit(): void {
  }

}
