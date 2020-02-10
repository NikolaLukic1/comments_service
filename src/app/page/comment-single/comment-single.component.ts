import { Component, OnInit } from '@angular/core';
import { Comment } from 'src/app/models/comment';
import { ActivatedRoute } from '@angular/router';
import { CommentServiceService } from 'src/app/services/comment-service.service';

@Component({
  selector: 'app-comment-single',
  templateUrl: './comment-single.component.html',
  styleUrls: ['./comment-single.component.css']
})
export class CommentSingleComponent implements OnInit {

  public comment: Comment;
  constructor(private _route: ActivatedRoute, private _commentService: CommentServiceService) { 
    
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      let id = +params['id'];
      this.getComment(id);
    })
  }
  public getComment(id: number) {
    this._commentService.getComment(id).subscribe((data) => {
      this.comment = data;
    })
  }

}
