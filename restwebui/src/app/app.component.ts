import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpService } from './http.service';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  template: `
    <h1>Ajax Call Test</h1>

    <table class="table">
      <thead>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Active</th>
        <th></th>
      </thead>
      <tbody>
        <tr *ngFor="let user of users">
          <td>{{user.id}}</td>
          <td>{{user.name}}</td>
          <td>{{user.email}}</td>
          <td>{{user.active ? 'Active' : 'Inactive'}}</td>
          <td>
            <button (click)="onDelete(user.id, confirmModal)" class="btn btn-danger">Delete</button>
            <button (click)="onEdit(user, content)" class="btn btn-primary">Edit</button>  
          </td>
        </tr>
      </tbody>
    </table>

    <button class="btn btn-success" (click)="onAddUser(content)">Add User</button>

    <ng-template #confirmModal let-modal>
      <div class="modal-header">
        <h4>Are you sure?</h4>
      </div>
      <div class="modal-body">
        Are you sure you want to delete?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-dark" 
          (click)="modal.close('Ok')">Ok</button>      
        <button type="button" class="btn btn-outline-dark" 
          (click)="modal.close('Cancel')">Cancel</button>      
      </div>
    </ng-template>


    <ng-template #content let-modal>
      <div class="modal-header">
        <h4 class="modal-title" id="modal-basic-title">Profile update</h4>
        <button type="button" class="close" aria-label="Close" (click)="modal.dismiss('Cross click')">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <user [user]="modalUser"></user>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-dark" (click)="modal.close('Save click')">Save</button>
      </div>
    </ng-template>

    <ngb-toast *ngIf="showToast" 
      [autohide]="true" 
      [delay]="5000"
      class="bg-danger"> 
      {{ toasterMessage }}
    </ngb-toast>

    <hr>
    {{ closeResult }}
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'restwebui';
  users:User[] = [];
  closeResult = '';
  showToast = false;
  toasterMessage = "";

  modalUser:User = new User();

  constructor(public httpService: HttpService, 
              public modalService: NgbModal) {

    this.httpService.getUsers()
      .subscribe((data)=>{
        this.users = data as User[];
      });
  }
  onDelete(id?: number, content?: any) {

    this.modalService.open(content, {})
      .result.then((result)=>{
        if (result == "Ok") {
          this.httpService.deleteUser(id)
            .subscribe((response)=> {
      
              let index = this.users.findIndex(user => user.id == id);
              this.users.splice(index, 1);
              this.toasterMessage = "User deleted";
              this.showToast = true;
            });
        }
      }, (reason) => {
        
      });
  }

  onEdit(userToEdit:User, content:any) {
    // this.modalUser = userToEdit; 
    this.modalUser = new User(userToEdit.id,
                              userToEdit.name, 
                              userToEdit.email, 
                              userToEdit.active);

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
      .result.then((result) => {
        this.closeResult = `Closed with: ${result}`;

        this.httpService.updateUser(this.modalUser)
          .subscribe((data)=>{
            let index = this.users.findIndex(user => user.id == this.modalUser.id);
            this.users[index] = this.modalUser;
          });

      }, (reason) => {
        this.closeResult = `dismissed`;
      });
  }

  onAddUser(content:any) {

    this.modalUser = new User();
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
      .result.then((result) => {
        this.closeResult = `Closed with: ${result}`;

        this.httpService.addUser(this.modalUser)
          .subscribe((addedUser)=> {

            this.users.push(addedUser as User);
          });

      }, (reason) => {
        this.closeResult = `dismissed`;
      });
  }

}
