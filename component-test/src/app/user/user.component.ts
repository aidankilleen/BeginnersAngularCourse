import { Component, Input, OnInit } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'user',
  template: `
    <button (click)="show=!show">{{ show ? "Hide" : "Show" }}</button>
    <table *ngIf="show">
      <tr><th>ID</th><td>{{ user.id }}</td></tr>
      <tr><th>Name</th><td>{{ user.name | titlecase }}</td></tr>
      <tr><th>Email</th><td>{{ user.email }}</td></tr>
      <tr><th>Active</th><td>{{ user.active ? "Active" : "Inactive" }}</td></tr>
      <tr><th>Salary</th><td>{{ user.salary | currency:"EUR" }}</td></tr>
      <tr><th>Date of Birth</th><td>{{ user.dob | date | lowercase }}</td></tr>
    </table>
    <hr>

  `,
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user:User = new User();
  show:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
