import { Component } from '@angular/core';
import { Message } from './message/message.model';


@Component({
  selector: 'app-root',
  template: `
    <div>
      <accordion
        [messages]="messages"
      >
      </accordion>


      <accordion
        [messages]="newsItems"
      >
      </accordion>

      <hr>

      {{ newsItems | json }}
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'component-event';

  newsItems: Message[] = [
    new Message("News 1", "this is news item 1", true),
    new Message("News 2", "this is news item 2"),
    new Message("News 3", "this is news items 3"),

  ];
  messages:Message[] = [
    new Message("Message1", "this is message 1", true),
    new Message("Message2", "this is message 2"),
    new Message("Message3", "this is message 3"),
    new Message("Message4", "this is message 4"),
    new Message("Message5", "this is message 5")
  ];

}
