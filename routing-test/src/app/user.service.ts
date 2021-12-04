import { Injectable } from '@angular/core';
import { User } from './user-list-page/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public users: User[] = [
    new User(1, "Alice", "alice@gmail.com", true),
    new User(2, "Bob", "bob@gmail.com", true),
    new User(3, "Carol", "carol@gmail.com", true),
    new User(4, "Dan", "dan@gmail.com", false)
  ]

  constructor() { }

  getUser(id:number): User {

    let index = this.users.findIndex(user=> {

      if (user.id == id) {
        return true;
      } else {
        return false;
      }
    });

    return this.users[index];
  }
}
