import { Component, OnInit } from '@angular/core';
import { PostService } from '../../service/post.service';
import { Post } from 'src/app/models/post';
import { take } from 'rxjs/operators';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  constructor(private postService:PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    })
  }
  addNewPost(post){
    console.log(post)
    this.posts.push(post.data);
  }

}
