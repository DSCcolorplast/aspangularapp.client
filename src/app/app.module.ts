import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChecklistComponent } from './checklist/checklist.component';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,ChecklistComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
