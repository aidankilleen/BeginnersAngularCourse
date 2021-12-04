import { Component } from '@angular/core';
import { Message } from './message';
import { User } from './user';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>{{ title }}</h1>

      <user-details [user]="users[0]"></user-details>

      <user-details *ngFor="let user of users"
        [user]="user"
      >
      </user-details>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor() {

    console.log("TypeScript tests");

    let v = 100;
    const pi = 3.14159;

    let list = [1, 2, 3, 4, 5, 6, 7];

    let a, b, c, rest;

    [a, b, c, ...rest] = list;

    console.log(a);
    console.log(b);
    console.log(c);

    console.log(rest);

    let o = {
      id:1, 
      name: "Aidan", 
      email: "aidan@gmail.com", 
      active: false
    };

    let {name, email, active} = o;

    console.log(name);
    console.log(email);


    let message = `
        this is a templated string
        ${name} made this string
        his email is ${email}.
        Aidan is ${active ? "active" : "inactive"}
    `;

    console.log(message);


    // (fat) Arrow functions 

    console.log("waiting...")
    setTimeout(function (){

      console.log("finished");

    }, 3000);


    let to = {
      message: "This is a message",
      timeout: 5000, 

      showMessage: function() {
        console.log(this.message);
      },

      showMessageLater: function() {
        setTimeout(() => {
          console.log(this.message);
        }, this.timeout);
      }
    }
    

    to.showMessageLater();

    list.forEach(function(item) {
      console.log(item);
    });
    console.log("==========================");

    list.forEach(item => console.log(item));


    console.log("=========================");

    let u = new User(1, "Alice", "alice@gmail.com", false);


    console.log(u.name);

    let n:Number;

    n = 22;

    //n = "twenty two";

    let u2:User;

    u2 = new User(1, "Alice", "alice", false);

    
    let u3 = new User(1, "Alice", "alice", false);


    //u3 = "not a user objet";

    let u4:any;

    u4 = new User(1, "", "", false);
    u4 = "this is not a user"


    let u5 = new User();

    console.log(u5);





























    





  }
  title = 'Angular Hello World!';

  messages=[new Message("M1", "message1"), 
            new Message("M2", "message2"), 
            new Message("M3", "message3"), 
            new Message("M4", "message4")];
  users=[
    new User(1, "Alice", "alice@gmail.com", false), 
    new User(2, "Bob", "bob@gmail.com", true), 
    new User(3, "Carol", "carol@gmail.com", false), 
    new User(4, "Dan", "dan@gmail.com", true), 
  ];
}
