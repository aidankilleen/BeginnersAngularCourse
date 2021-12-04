import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user-list-page/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail-page',
  template: `
    <h1>User Detail</h1>
    <user [user]="user"></user>
  `,
  styleUrls: ['./user-detail-page.component.css']
})
export class UserDetailPageComponent implements OnInit {

  id: number = 0;
  user: User = new User();

  constructor(private route:ActivatedRoute, 
            private userService:UserService) { 
    this.route.params.subscribe(params => {
      this.id = params['id'];

      this.user = this.userService.getUser(this.id);

    });
  }

  ngOnInit(): void {
  }

}
