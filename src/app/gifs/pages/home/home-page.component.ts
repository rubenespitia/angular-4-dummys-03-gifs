import {Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { GIF } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-home-page',
  templateUrl: `./home-page.component.html`,
})
export class HomePageComponent {

  constructor(public gifsService: GifsService){}

  get gifs(): GIF[]{
    return this.gifsService.gifList;
  }
 }
