import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailComponent } from './components/user-detail/user-detail.component'; 
import { FormsModule } from '@angular/forms';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { PostsComponent } from './components/posts/posts.component';
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailComponent,
    CreatePostComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
