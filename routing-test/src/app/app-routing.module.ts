import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { UserDetailPageComponent } from './user-detail-page/user-detail-page.component';
import { UserListPageComponent } from './user-list-page/user-list-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'}, 
  { path: 'home', component: HomePageComponent }, 
  { path: 'contact', component: ContactPageComponent }, 
  { path: 'about', component: AboutPageComponent }, 
  { path: 'products', component: ProductsPageComponent }, 
  { path: 'users', component: UserListPageComponent },
  { path: 'users/:id', component: UserDetailPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
