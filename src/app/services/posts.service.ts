import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Post} from "../models/post.model";



@Injectable()
export class PostsService {

  constructor(private http: Http) {}

  sendPost(post: Post): Observable<string>{
    return this.http.post('http://localhost:9000/posts/sendPost', post)
      .map((response: Response) => response.toString())
  }

  getWall(owner: string): Observable<Post[]> {
    return this.http.get(`http://localhost:9000/posts/getWallByOwner/${owner}`)
      .map((response: Response) => response.json());
  }

}
