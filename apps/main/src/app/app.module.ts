import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailComponent } from './detail/detail.component';
import { ItemComponent } from './item/item.component';
import { PageComponentComponent } from './page-component/page-component.component';

@NgModule({
  declarations: [AppComponent, DetailComponent, ItemComponent, PageComponentComponent],
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
