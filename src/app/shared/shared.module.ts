import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LazyImageComponent } from '../gifs/components/lazyImage/lazyImage.component';



@NgModule({
  declarations: [
    SidebarComponent,
    LazyImageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent,
    LazyImageComponent
  ]
})
export class SharedModule { }
