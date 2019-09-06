import { IUserState, initialUserState } from './user.state';
import { IPostState, initialPostState } from './post.state';

export interface IAppState {
    users: IUserState,
    posts: IPostState
}
export const initialAppState: IAppState = {
    users: initialUserState,
    posts: initialPostState
}
export function getInitialState(): IAppState {
    return initialAppState;
  }