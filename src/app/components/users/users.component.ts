import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/store/states/app.state';
import { GetUsers } from '../../store/actions/user.actions';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { selectUserList } from '../../store/selectors/user.selectors';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users = this.store.pipe(select(selectUserList));
  constructor(private store: Store<IAppState>) { 
    this.store.dispatch(new GetUsers());

  }
  ngOnInit() {
   
  }
}
