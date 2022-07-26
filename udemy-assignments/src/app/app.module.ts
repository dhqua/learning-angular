import { ListService } from './list.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { StarButtonComponent } from './star-button/star-button.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    StarButtonComponent
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
