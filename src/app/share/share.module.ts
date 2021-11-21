import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerLvendasComponent } from './container-lvendas/container-lvendas.component';
import { HeaderLvendasComponent } from './header-lvendas/header-lvendas.component';
import { RouterModule } from '@angular/router';
// import {MatIconModule} from '@angular/material'


@NgModule({
  declarations: [
    ContainerLvendasComponent,
    HeaderLvendasComponent,
  ],
  exports: [
    ContainerLvendasComponent,
    HeaderLvendasComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ShareModule { }