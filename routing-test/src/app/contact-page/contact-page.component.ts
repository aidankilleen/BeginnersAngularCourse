import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  template: `
    <h1>Contact Us</h1>

    <ngb-alert *ngFor="let alert of alerts"
        [type]="alert.type" (closed)="onClose()"
        >{{ alert.message }}
    </ngb-alert>
  `,
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  message: string = "This is a success alert";
  alerts = [
    { type: "success", message: "This is a success message" }, 
    { type: "warning", message: "This is a warning message" }, 
    { type: "danger", message: "This is a danger message" }, 
    { type: "info", message: "This is a info message" }, 
    { type: "primary", message: "This is a primary message" }, 
    { type: "secondary", message: "This is a secondary message" }
  ];


  constructor() { }

  ngOnInit(): void {
  }

  onClose() {
    alert("you closed the alert");
  }

}
