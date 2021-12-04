import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Message } from './message.model';

@Component({
  selector: 'message',
  template: `
    <div>
      <h1 (click)="onClick()">{{ message.title | uppercase }}</h1>
      <p *ngIf="message.expanded">{{ message.text }}</p>

    </div>
  `,
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() message:Message = new Message("","");
  @Output() stateChanged = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onClick () {
    this.message.expanded = !this.message.expanded;
    this.stateChanged.emit(this.message);
  }

}
