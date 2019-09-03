import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/service/post.service';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  post:Post = new Post();
  constructor(private postService:PostService) { }
  @Output() newPost = new EventEmitter();
  ngOnInit() {
  }
  onSubmit(){
    this.postService.createPost(this.post).subscribe(data => {
      this.post = data;
      this.newPost.next({data: this.post})
    })
  }
  
}
