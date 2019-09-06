import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../../store/states/app.state';
import { selectPostList, selectLasPost } from '../../store/selectors/post.selectors';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-last-post',
  templateUrl: './last-post.component.html',
  styleUrls: ['./last-post.component.css']
})
export class LastPostComponent implements OnInit {
  posts$ = this.store.pipe( select( selectPostList ) )
  post$ = this.store.pipe( select( selectLasPost ) ) ;
  constructor(private store: Store<IAppState>) {
    
   }
  ngOnInit() {
    
  }
  getPost()
  {
  }

}
