import { TitlePipe } from './title.pipe';
import { ListService } from './list.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { StarButtonComponent } from './star-button/star-button.component';
import { TestCustomPipeComponent } from './test-custom-pipe/test-custom-pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    StarButtonComponent,
    TitlePipe,
    TestCustomPipeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    ListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
