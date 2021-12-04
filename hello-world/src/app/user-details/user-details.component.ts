import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'user-details',
  template: `
    <table>
      <tr><th>ID</th><td>{{ user.id }}</td></tr>
      <tr><th>Name</th><td>{{ user.name }}</td></tr>
      <tr><th>Email</th><td>{{ user.email }}</td></tr>
      <tr><th>Active</th><td>{{ user.active }}</td></tr>
    </table>
  `, 
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  @Input() user:User = new User(-1, "", "", false);

  constructor() { }

  ngOnInit(): void {
  }

}
