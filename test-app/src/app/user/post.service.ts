import { Injectable } from '@angular/core';
import { PostModel } from './list-post/post.model';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPostsAsync(): Observable<PostModel[]>
  {
    const url = "http://jsonplaceholder.typicode.com/posts";
    return this.http.get(url).pipe(map((res:PostModel[]) => res));
  }

  getPosts(): PostModel[] {

    let posts = new Array<PostModel>();
    let post1 = new PostModel(1, 1, "Test 1", "Test Body 1");
    let post2 = new PostModel(2, 2, "Test 2", "Test Body 2");
    let post3 = new PostModel(3, 3, "Test 3", "Test Body 3");
    let post4 = new PostModel(4, 4, "Test 4", "Test Body 4");
    posts.push(post1);
    posts.push(post2);
    posts.push(post3);
    posts.push(post4);
    return posts;
    
  }
}