import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PowerBIEmbedModule } from 'powerbi-client-angular';

import { AppComponent } from './app.component';
import { PowerBiComponent } from './power-bi/power-bi.component';

@NgModule({
  declarations: [
    AppComponent,
    PowerBiComponent
  ],
  imports: [
    BrowserModule,
    PowerBIEmbedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
