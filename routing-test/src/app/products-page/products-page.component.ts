import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-page',
  template: `
    <h1>Products</h1>
    <ngb-accordion [closeOthers]="true" activeIds="paragraph-0">
      <ngb-panel 
        *ngFor="let paragraph of paragraphs; let i=index"
        [id]="'paragraph-' + i" 
        [title]="paragraph.title">
        <ng-template ngbPanelContent>
          {{ paragraph.description }}
        </ng-template>
      </ngb-panel>
    </ngb-accordion>
  `,
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {

  paragraphs = [
    {title:"Product 1", description: "product 1 description"}, 
    {title:"Product 2", description: "product 2 description"}, 
    {title:"Product 3", description: "product 3 description"},
    {title:"Product 4", description: "product 4 description"}
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
