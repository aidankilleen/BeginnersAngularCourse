import { Component, Input, OnInit } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user:User = new User();
  userToEdit:User = new User();
  editing: boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.userToEdit = new User(this.user.id, this.user.name, this.user.email, this.user.active);
  }

  onEdit() {
    this.editing = true;
  }

  onSave() {
    // copy the new values to the original object
    this.user.name = this.userToEdit.name;
    this.user.email = this.userToEdit.email;
    this.user.active = this.userToEdit.active;

    this.editing = false;
  }

  onCancel() {
    // restore the original object
    this.userToEdit = new User(this.user.id, 
                               this.user.name, 
                               this.user.email, 
                               this.user.active);
    this.editing = false;
  }
}
