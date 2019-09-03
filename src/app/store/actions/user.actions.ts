import { Action } from '@ngrx/store';

export enum EUserActions {
    GetUsers = '[User] GetUsers',
    GetSuccessUsers = '[User] GetSuccessUsers'
}
export class GetUsers implements Action{
    public readonly type = EUserActions.GetUsers;
}
export class GetSuccessUsers implements Action {
    public readonly type = EUserActions.GetSuccessUsers;
}
export type UserActions = GetUsers | GetSuccessUsers;

