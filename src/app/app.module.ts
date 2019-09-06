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
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/reducers/app.reducers';
import { UserEffects } from './store/effects/user.effects';
import { PostEffects } from './store/effects/post.effects';
import { LastPostComponent } from './components/last-post/last-post.component';
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailComponent,
    CreatePostComponent,
    PostsComponent,
    LastPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([UserEffects, PostEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
