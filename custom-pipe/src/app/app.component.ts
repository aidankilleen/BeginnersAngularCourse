import { Component } from '@angular/core';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarHollow } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>{{ title | titlecase }}</h1>
      <fa-icon [icon]="icon" size="2x"></fa-icon>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'custom pipe test application';
  name = "Aidan";
  price = 100;
  icon = faStarHollow;
  angle = 0;

  text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum orci at pharetra auctor. Nulla venenatis dui lectus, sit amet commodo mi pharetra ut. Etiam eget cursus odio, ut euismod mauris. Fusce suscipit auctor convallis. Proin euismod scelerisque orci, a interdum nulla. Nulla dolor metus, pellentesque et venenatis vitae, posuere in libero. Praesent dictum nisl tristique est condimentum, non rutrum mi facilisis. Quisque rhoncus ex dui, ut elementum mi sagittis eu. Aliquam consequat mauris sed turpis condimentum, eu luctus magna vulputate. Etiam non ultricies erat."
}
