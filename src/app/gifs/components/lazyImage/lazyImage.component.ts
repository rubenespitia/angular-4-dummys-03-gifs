import { CommonModule } from '@angular/common';
import { OnInit, Component, Input, input } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazyImage.component.html',
  styleUrl: './lazyImage.component.css',
})
export class LazyImageComponent implements OnInit  {

  @Input()
  public url!: string;

  @Input()
  public alt!: string;

  public hasLoaded: boolean = false;

  ngOnInit(): void {
    if(!this.url) throw new Error('URL property is required ');
  } 

  onLoad(): void {
    setTimeout(() => {
      this.hasLoaded = true;
    }, 1000);
    console.log('Image loaded');
    this.hasLoaded = true;
  }
}
