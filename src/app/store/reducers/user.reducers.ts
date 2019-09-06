

import { IUserState, initialUserState } from '../states/user.state';
import { UserActions, EUserActions } from '../actions/user.actions';
export const userReducers = (
    state = initialUserState,
    action: UserActions
) : IUserState => {
    switch(action.type){
        case EUserActions.GetSuccessUsers: {
            return {
                ...state,
                users: action.payload
            }
        }
        default:
            return state;
    }
}