import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list-page',
  template: `
    <h1>User List</h1>

    <ul>
      <li *ngFor="let user of userService.users">
        <a [routerLink]="'' + user.id">{{ user.name }}</a>
      </li> 
    </ul>
  
  `,
  styleUrls: ['./user-list-page.component.css']
})
export class UserListPageComponent implements OnInit {

  constructor(public userService:UserService) { }

  ngOnInit(): void {
  }

}
