import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyArticleComponent } from './my-article/my-article.component';
import { MyArticle01Component } from './my-article01/my-article01.component';
import { MyArticle02Component } from './my-article02/my-article02.component';

@NgModule({
  declarations: [
    AppComponent,
    MyArticleComponent,
    MyArticle01Component,
    MyArticle02Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
