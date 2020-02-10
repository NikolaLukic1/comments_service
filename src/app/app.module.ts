import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommentServiceService } from './services/comment-service.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentSingleComponent } from './page/comment-single/comment-single.component';
import { CommentsComponent } from './page/comments/comments.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentSingleComponent,
    CommentsComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CommentServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
