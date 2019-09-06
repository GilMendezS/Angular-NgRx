import { Action } from '@ngrx/store';
import { Post } from 'src/app/models/post';

export enum EPostActions {
    GetPosts = '[POSTS] Get Posts',
    GetPostsSuccess = '[POSTS] Get Posts Success',
    AddPostSuccess = '[Posts] Add Post',
    RemovePostSuccess = '[POSTS] Remove Post',
    AddLastPost = '[POST] Add Last Post'
}

export class GetPosts implements Action {
    public readonly type = EPostActions.GetPosts;
}
export class GetPostsSuccess implements Action {
    public readonly type = EPostActions.GetPostsSuccess;
    constructor(public payload:Post[]) {};
}
export class AddPostSuccess implements Action {
    public readonly type = EPostActions.AddPostSuccess;
    constructor(public payload: Post) {};
}
export class RemovePostSuccess implements Action {
    public readonly type = EPostActions.RemovePostSuccess;
    constructor(public payload:number) {};
}
export class AddLastPost implements Action {
    public readonly type = EPostActions.AddLastPost;
    constructor(public payload: Post){ };
}

export type PostActions = GetPosts | GetPostsSuccess | AddPostSuccess | RemovePostSuccess | AddLastPost;