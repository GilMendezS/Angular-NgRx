import { PostService } from '../../service/post.service';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../models/post';
import { Action } from '@ngrx/store';
import { EPostActions, PostActions, AddPostSuccess, GetPostsSuccess, AddLastPost } from '../actions/post';
import { switchMap, map } from 'rxjs/operators';
import { GetSuccessUsers } from '../actions/user.actions';

@Injectable()
export class PostEffects {
    constructor(
        private actions$: Actions,
        private postService: PostService
    ){}

    @Effect()
    GETPOSTS: Observable<Action> = this.actions$.pipe(
        ofType(EPostActions.GetPosts),
        switchMap( () =>  this.postService.getPosts() ),
        switchMap((posts => [
            new GetPostsSuccess(posts),
            new AddLastPost(posts[0])
        ])
        )
    )   
}