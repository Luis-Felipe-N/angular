import { Injectable } from '@angular/core';
import { IProduct } from '../../procucts'


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  items: IProduct[] = []

  addToCart( product: IProduct ) {
    this.items = [ ...this.items, product]
    localStorage.setItem('cart', JSON.stringify(this.items))
  }

  getItem( ) {
    const dataStorage = localStorage.getItem('cart')

    if ( dataStorage ) {
      const cartStorage = JSON.parse(dataStorage)
      this.items = cartStorage
    }
    return this.items
  }

  clearCart() {
    this.items = []
    return this.items
  }

  amountItemsCart() {
    const dataStorage = localStorage.getItem('cart')

    if ( dataStorage ) {
      const cartStorage = JSON.parse(dataStorage)
      return cartStorage.length
    }
  }
}
