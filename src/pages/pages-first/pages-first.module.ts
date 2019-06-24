import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PagesFirstPage } from './pages-first';

@NgModule({
  declarations: [
    PagesFirstPage,
  ],
  imports: [
    IonicPageModule.forChild(PagesFirstPage),
  ],
})
export class PagesFirstPageModule {}
