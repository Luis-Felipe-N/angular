import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { MugsComponent } from './mugs/mugs.component';
import { ProductsComponent } from './products/products.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'mugs',
    component: MugsComponent
  },
  {
    path: 'products/:slug',
    component: ProductsComponent
  },
  {
    path: 'cart',
    component: CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
