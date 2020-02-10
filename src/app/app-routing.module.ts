import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentSingleComponent } from './page/comment-single/comment-single.component';
import { CommentsComponent } from './page/comments/comments.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', redirectTo: 'comments', pathMatch: 'full' },
  { path: 'comments', component: CommentsComponent },
  { path: 'comments/:id', component: CommentSingleComponent },
  { path: 'test', component: WelcomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
