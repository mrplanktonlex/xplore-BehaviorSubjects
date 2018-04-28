import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ACompComponent } from './a-comp/a-comp.component';
import { BCompComponent } from './b-comp/b-comp.component';
import { CCompComponent } from './c-comp/c-comp.component';


@NgModule({
  declarations: [
    AppComponent,
    ACompComponent,
    BCompComponent,
    CCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
