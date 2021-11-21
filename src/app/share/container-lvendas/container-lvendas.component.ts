import { Component, OnInit } from '@angular/core';
import { products } from 'src/procucts';

@Component({
  selector: 'app-container-lvendas',
  templateUrl: './container-lvendas.component.html',
  styleUrls: ['./container-lvendas.component.scss']
})
export class ContainerLvendasComponent implements OnInit {

  products = products

  constructor() { }

  ngOnInit(): void {
  }

}
