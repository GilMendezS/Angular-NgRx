import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../states/app.state';
import { userReducers } from './user.reducers';
import { postReducers } from './post.reducers';
export const appReducers: ActionReducerMap<IAppState, any> = {
    users: userReducers,
    posts:  postReducers
}