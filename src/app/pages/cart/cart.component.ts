import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { IProduct } from 'src/procucts';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})


export class CartComponent implements OnInit {

  items = this.cartService.getItem()
  amountItems = this.cartService.amountItemsCart()
  totalPrice = this.items.reduce( (acc: any, item) => {
    console.log(item.price, acc)
    return acc += item.price
  }) 
  
  constructor(
    private cartService: CartService
    ) { }
    
    ngOnInit(): void {
      console.log(this.totalPrice)
  }

}
