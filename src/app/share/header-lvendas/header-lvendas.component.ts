import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';



@Component({
  selector: 'app-header-lvendas',
  templateUrl: './header-lvendas.component.html',
  styleUrls: ['./header-lvendas.component.scss']
})
export class HeaderLvendasComponent implements OnInit {

  amountItems = this.cartService.amountItemsCart()
  
  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    console.log(this.amountItems)
  }

  ngOnChange(): void {
    console.log('Estado mudou')
  }
}
