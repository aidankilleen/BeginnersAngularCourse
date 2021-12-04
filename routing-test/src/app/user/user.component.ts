import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user-list-page/user.model';

@Component({
  selector: 'user',
  template: `
    <div>
      <h4>{{ user.id }}</h4>
      <h3>{{ user.name }}</h3>
      <a [href]="'mailto:' + user.email">
        {{ user.email }}
      </a>
      <hr>
      {{ user.active ? "Active" : "Inactive"}}
    </div>
  `,
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user:User = new User();
  constructor() { }

  ngOnInit(): void {
  }

}
