import { NgModule } from '@angular/core';
import { SharedComponent } from './shared.component';
import { WonderfulTitleComponent } from './components/wonderful-title/wonderful-title.component';



@NgModule({
  declarations: [
    SharedComponent,
    WonderfulTitleComponent
  ],
  imports: [
  ],
  exports: [
    SharedComponent,
    WonderfulTitleComponent
  ]
})
export class SharedModule { }
