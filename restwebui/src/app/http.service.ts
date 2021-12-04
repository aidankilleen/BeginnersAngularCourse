import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url: string = "http://localhost:3000/users";
  constructor(private httpClient: HttpClient) { }

  getUsers() {
    return this.httpClient.get(this.url);
  }

  deleteUser(id?: number) {
    return this.httpClient.delete(`${this.url}/${id}`);
  }

  addUser(userToAdd: User) {

    return this.httpClient.post(
      this.url, userToAdd);
  }

  updateUser(userToUpdate: User) {
    return this.httpClient.put(
      `${this.url}/${userToUpdate.id}`, 
      userToUpdate
    );
  }
}
