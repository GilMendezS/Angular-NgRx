import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { User } from '../../models/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user:User;
  constructor(private activatedRoute:ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    const userId = this.activatedRoute.snapshot.paramMap.get('id');
    this.userService.getUser( +userId ).subscribe( data => {
      this.user = data;
      console.log(this.user);
    })
  }

}
