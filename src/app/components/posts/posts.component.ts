import { Component, OnInit } from '@angular/core';
import { PostService } from '../../service/post.service';
import { Post } from 'src/app/models/post';
import { Store, select } from '@ngrx/store';
import { IPostState } from '../../store/states/post.state';
import { GetPosts, RemovePostSuccess } from '../../store/actions/post';
import { selectPostList } from '../../store/selectors/post.selectors';
import { IAppState } from 'src/app/store/states/app.state';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts$ = this.store.pipe( select( selectPostList ) )
  constructor(private postService:PostService, private store: Store<IAppState>) { }

  ngOnInit() {
    this.store.dispatch(new GetPosts());
  }
  removeItem(post: Post) {
    this.store.dispatch(new RemovePostSuccess(post.id));
  }

}
