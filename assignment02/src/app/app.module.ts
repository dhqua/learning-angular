import { ListService } from './list.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
