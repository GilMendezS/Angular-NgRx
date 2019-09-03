import { IUserState, initialUserState } from './user.state';

export interface IAppState {
    users: IUserState
}
export const initialAppState: IAppState = {
    users: initialUserState
}