import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct, products } from 'src/procucts';
import { CartService } from '../../services/cart.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  product: IProduct | undefined;

  constructor( 
      private route: ActivatedRoute,
      private cartService: CartService
    ) { }
  
  addToCart( product: IProduct ) {
    this.cartService.addToCart(product) 
      console.log( product.name + ' Foi adicionado')
  }

  ngOnInit(): void {
    const { slug } = this.route.snapshot.params;
    console.log(slug)
    
    this.product = products.find( product => product.name === slug)
  }

}
