import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Comment } from 'src/app/models/comment';
import { CommentServiceService } from 'src/app/services/comment-service.service';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {

  public commentForm: FormGroup;
  public comments: Comment[] = [];

  constructor(private _commentService: CommentServiceService) { 
    this._commentService.getComments().subscribe((data) => {
      this.comments = data;
    })
    this.initForm();
  }

  public initForm() {
    this.commentForm = new FormGroup({
      name: new FormControl('', [
        Validators.required
      ]),
      postId: new FormControl(1, [
        Validators.required
      ]),
      body: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.required
      ])
    });
  }
  public submitForm() {
    let name = this.commentForm.get('name').value;
    let body = this.commentForm.get('body').value;
    let email = this.commentForm.get('email').value;
    let postId = this.commentForm.get('postId').value;
    let comment = new Comment(postId, name, email, body, 0); //postId: number, name: string, email: string,  body: string, @Optional() id: number
    this.createComment(comment)
  }
  
  public getComment(id: number) {
    this._commentService.getComment(id).subscribe((data) => {
      alert(JSON.stringify(data));
    })
  }

  public createComment(comment: Comment) {
    this._commentService.createComment(comment).subscribe((data) => {
      this.comments.unshift(data);
    })
  }

  public deleteComment(id: number) {
    this._commentService.deleteComment(id).subscribe((data) => {
      this._removeCommentsFromList(id);
      alert("Comment je obrisan sa servera");
    })
  }

  private _removeCommentsFromList(id: number) {
    let ind = this.comments.findIndex(post => post.id == id);
    this.comments.splice(ind, 1);
  }
}
