import { Action } from '@ngrx/store';
import { User } from 'src/app/models/user';

export enum EUserActions {
    GetUsers = '[User] GetUsers',
    GetSuccessUsers = '[User] GetSuccessUsers'
}
export class GetUsers implements Action{
    public readonly type = EUserActions.GetUsers;
}
export class GetSuccessUsers implements Action {
    public readonly type = EUserActions.GetSuccessUsers;
    constructor(public payload: User[]){}
}
export type UserActions = GetUsers | GetSuccessUsers;

