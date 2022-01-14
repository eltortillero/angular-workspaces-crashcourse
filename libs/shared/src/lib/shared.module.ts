import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WonderfulTitleComponent } from './component/wonderful-title/wonderful-title.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    WonderfulTitleComponent
  ],
  exports: [
    WonderfulTitleComponent
  ],
})
export class SharedModule {}
