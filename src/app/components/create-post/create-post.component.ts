import { Store } from '@ngrx/store';
import { Post } from 'src/app/models/post';
import { Component, OnInit } from '@angular/core';
import { IAppState } from '../../store/states/app.state';
import { AddPostSuccess } from '../../store/actions/post';
@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  post:Post = new Post();
  constructor(private store: Store<IAppState>) { }
  ngOnInit() {
  }
  onSubmit(){
    this.store.dispatch(new AddPostSuccess(this.post));
  }
  
}
