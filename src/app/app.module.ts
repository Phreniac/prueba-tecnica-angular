import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';

import { MainComponent } from './main/main.component';
import { TreeCardComponent } from './tree-card/tree-card.component';
import { TreeModalComponent } from './tree-modal/tree-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TreeCardComponent,
    TreeModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
