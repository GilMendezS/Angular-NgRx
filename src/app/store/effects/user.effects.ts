import { Injectable } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { EUserActions, UserActions, GetSuccessUsers } from '../actions/user.actions';
import { switchMap, map, tap, take } from 'rxjs/operators';

@Injectable()
export class UserEffects {
    constructor(
        private userService:UserService,
        private actions$:Actions
    ){}
    @Effect()
    GETUSERS: Observable<Action> = this.actions$.pipe(
        ofType(EUserActions.GetUsers),
        
        switchMap( () => 
            this.userService.getUsers().pipe(
                map(users => {
                    return new GetSuccessUsers(users)
                })
            )
        )
    )
    
    
}