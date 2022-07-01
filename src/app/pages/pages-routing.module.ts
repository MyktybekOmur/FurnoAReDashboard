import { CategoriesComponent } from './categories/categories.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UserAddComponent } from './../modal/user-add/user-add.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AddCategoryComponent } from '../modal/add-category/add-category.component';

const routes: Routes = [{
  path: '',
  component: MainComponent,
  children: [
    { path: 'home', component: HomeComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'products/product-details/:id', component: ProductDetailComponent },
    { path: 'products/add-product', component: AddProductComponent },
    { path: 'users', component: UsersComponent },
    { path: 'categories', component: CategoriesComponent },
    { path: '', redirectTo: '/admin/home', pathMatch: 'full' },
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
  ProductDetailComponent,
  CategoriesComponent,
  AddCategoryComponent
]
