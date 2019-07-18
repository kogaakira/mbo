import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MembertableComponent } from './membertable.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,MembertableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
