import { Component } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user/user.model';

@Component({
  selector: 'app-root',
  template: `
    <div>
    <user *ngFor="let user of userService.users" 
      [user]="user"></user>
    </div>
    <hr>
    {{ userService.users | json }}

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'user-edit';

  // userService: UserService;

  constructor(public userService: UserService) {

    // this.userService = userService;
  }

}
