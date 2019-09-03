import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { UsersComponent } from './components/users/users.component';

import { UserDetailComponent } from './components/user-detail/user-detail.component';
const routes: Routes = [
  {
    path: '', component: UsersComponent
  },
  {
    path: 'users/:id', component: UserDetailComponent
  },
  {
    path: 'posts', component: PostsComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
