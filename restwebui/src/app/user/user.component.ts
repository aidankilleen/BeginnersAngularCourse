import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'user',
  template: `
  <div>

  This will be a user
  {{ user.name }}

  <label>Name</label>
  <input [(ngModel)]="user.name" class="form-control">

  <label>Email</label>
  <input [(ngModel)]="user.email" class="form-control">

  <label>Active</label>
  <input type="checkbox" [(ngModel)]="user.active" class="form-check-input">

  </div>
  `,
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() editing = false;
  @Input() user:User = new User();

  constructor() { }

  ngOnInit(): void {
  }

}
