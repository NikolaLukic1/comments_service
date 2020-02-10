import { Optional } from '@angular/core';

export class Comment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;

    constructor(postId: number, name: string, email: string,  body: string, @Optional() id: number) {
        this.id = id;
        this.postId = postId;
        this.name = name;
        this.email = email;
        this.body = body;
    }
    
}