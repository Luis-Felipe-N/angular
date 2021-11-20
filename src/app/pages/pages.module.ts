import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { RoutingModule } from './routing.module';
import { ShareModule } from '../share/share.module';
import { ProductsComponent } from './products/products.component';
import { MugsComponent } from './mugs/mugs.component';



@NgModule({
  declarations: [
    HomeComponent,
    ProductsComponent,
    MugsComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    ShareModule
  ]
})
export class PagesModule { }
