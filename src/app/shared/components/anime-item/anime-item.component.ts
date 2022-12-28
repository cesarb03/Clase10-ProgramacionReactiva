import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-anime-item',
  templateUrl: './anime-item.component.html',
  styleUrls: ['./anime-item.component.scss']
})
export class AnimeItemComponent implements OnInit {
  @Input() anime: any;

  constructor() { }

  ngOnInit(): void {
  }

}
