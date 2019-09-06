import { IPostState } from '../states/post.state';
import { IAppState, initialAppState } from '../states/app.state';
import { createSelector } from '@ngrx/store';
import { create } from 'domain';

export const selectPosts = ( state:  IAppState) => state.posts;

export const selectPostList = createSelector(
    selectPosts,
    ( state: IPostState ) => state.posts
)
export const selectLasPost = createSelector(
    selectPosts,
    (state: IPostState) => state.posts ? state.posts[0] : null
)