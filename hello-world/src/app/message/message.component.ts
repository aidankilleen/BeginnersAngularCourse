import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../message';
@Component({
  selector: 'message',
  template: `
    <div>
      <h1 (click)="onClick()">{{ message.title }}</h1>
      <p *ngIf="showMessage">{{ message.text }}</p>
    </div>
  `,
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() message:Message = new Message("", "");
  
  showMessage=false;

  onClick() {
    this.showMessage=!this.showMessage;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
