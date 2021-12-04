import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../message/message.model';

@Component({
  selector: 'accordion',
  template: `
    <div>
      <message 
        *ngFor="let message of messages; first as isFirst"
        [message]="message"
        (stateChanged)="onStateChanged($event)"
      >
      </message>
    </div>
  `,
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  @Input() messages:Message[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  onStateChanged(changedMessage: Message) {

    for (let i=0; i<this.messages.length; i++) {

      if (this.messages[i] != changedMessage) {
        this.messages[i].expanded = false;
      }
    }
  }
}
