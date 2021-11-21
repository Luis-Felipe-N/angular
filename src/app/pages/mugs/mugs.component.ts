import { Component, OnInit } from '@angular/core';
import { IProduct, products } from 'src/procucts';

@Component({
  selector: 'app-mugs',
  templateUrl: './mugs.component.html',
  styleUrls: ['./mugs.component.scss']
})

export class MugsComponent implements OnInit {
  products: IProduct[] = []

  constructor() { }

  ngOnInit(): void {

    this.products = products.filter( product => product.category === 'mugs')

    console.log(this.products)

  }

}
