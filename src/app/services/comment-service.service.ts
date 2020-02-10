import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from '../models/comment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommentServiceService {
  private baseUrl = 'https://jsonplaceholder.typicode.com/comments';
  constructor(private _httpClient: HttpClient) { }

  public getComments() : Observable<Comment[]> {
    return this._httpClient.get(this.baseUrl).pipe(
      map((data: any[]) => data.map((item: any) => this._createCommentFromObject(item))),
    );
  }

  public getComment(id: number) : Observable<Comment> {
    return this._httpClient.get(this.baseUrl + '/' + id).pipe(
      map((data: any) =>  this._createCommentFromObject(data)),
    );
  }

  public deleteComment(id: number) : Observable<Comment> {
    return this._httpClient.delete(this.baseUrl + '/' + id).pipe(
      map((data: any) =>  this._createCommentFromObject(data)),
    );
  }

  public createComment(comment: Comment) : Observable<Comment> {
    return this._httpClient.post(this.baseUrl, comment).pipe(
      map((data: any) =>  this._createCommentFromObject(data)),
    );
  }



  private _createCommentFromObject(item:any) {
    return new Comment(item.userId, item.name, item.email, item.body, item.id);
  }


}
