import { AddProductComponent } from './add-product/add-product.component';
import { UserAddComponent } from './../modal/user-add/user-add.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [{
  path: '',
  component: MainComponent,
  children: [
    { path: 'home', component: HomeComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'products/product-details', component: ProductDetailComponent },
    { path: 'products/add-product', component: AddProductComponent },
    { path: 'users', component: UsersComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
  ],
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
export const routingPageComponents = [
  MainComponent,
  HomeComponent,
  UserAddComponent,
  UsersComponent,
  ProductsComponent,
  ProductDetailComponent
]
