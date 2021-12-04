import { Component } from '@angular/core';
import { User } from './user/user.model';

@Component({
  selector: 'app-root',
  template: `
    <div>

      
      <h1>{{ title }}</h1>
      <input [value]="title" (keyup)="onChange(txtValue.value)" #txtValue>

    <hr>
      <input [(ngModel)]="name">

      <button (click)="name=''">Reset Name</button>
      <hr>

      <input type="checkbox" [(ngModel)]="show">
      <div *ngIf="show">
        <h1>Bind Checkbox to Boolean variable</h1>
      </div>
    </div>
    <hr>
    <select [(ngModel)]="selectedItem" size="10">
      <option>One</option>
      <option>Two</option>
      <option>Three</option>
    </select>
    <hr>
    {{ selectedItem }}

    <hr>

    One<input type="radio" name="radItem" value="One" [(ngModel)]="selectedItem"><br>
    Two<input type="radio" name="radItem" value="Two" [(ngModel)]="selectedItem"><br>
    Three<input type="radio" name="radItem" value="Three"[(ngModel)]="selectedItem"><br>

    <hr>

    <input type="number" [(ngModel)]="a"><br>
    <input type="number" [(ngModel)]="b"><br>
    <hr>
    {{ a + b }}

    <hr>

    <div [ngStyle]="{'background-color':colour}">
      {{ colour }}
    </div>

    <input type="color" [(ngModel)]="colour">

    <hr>


    <input type="range" min="10" max="100" value="50" [(ngModel)]="fontSize">


    <button (click)="fontSize = fontSize + 1">+</button>
    <button (click)="fontSize = fontSize - 1">-</button>
    <div [ngStyle]="{'font-size': fontSize + 'px' }">
       This is some {{ fontSize }} text
    </div>

    <hr>

    <input type="checkbox" [(ngModel)]="isBold"> <br>
    <input type="checkbox" [(ngModel)]="isUnderlined"> <br>
    <input type="checkbox" [(ngModel)]="isStrikethrough"> <br>

    <div [ngClass]="{bold:isBold, underlined:isUnderlined, strikethrough:isStrikethrough}">
      ngClassDemo
    </div>
    
  `, 
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Component Test';

  isBold = false;
  isUnderlined = false;
  isStrikethrough = false;

  fontSize: number = 50;
  colour: string = "#0000ff";

  a: number = 10;
  b: number = 20;

  selectedItem: string = "Two";
  name: string = "Aidan";
  show: boolean = false;



  users = [
    new User(1, "alice taylor", "alice@gmail.com", true, 50000, new Date("1/1/1990")), 
    new User(2, "bob bailey", "bob@gmail.com", true, 30000, new Date("1/13/1980")), 
    new User(3, "carol conway", "carol@gmail.com", true,  50000, new Date("12/25/1979")), 
    new User(4, "dan dunne", "dan@gmail.com", true,  37000, new Date("8/23/2000")), 

  ]

  onChange(value:string) {
    console.log(`changed:${value}`);
    this.title = value;
  }
}
