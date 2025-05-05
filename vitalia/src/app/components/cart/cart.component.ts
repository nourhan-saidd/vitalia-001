import { Component, inject, Inject, OnInit } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { Icart } from '../../core/interfaces/icart';
import { CurrencyPipe } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CurrencyPipe,RouterLink,RouterLinkActive],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit
{
  //inject cart services
  private readonly _CartService = inject( CartService );
  //interface for cart items
  cartItems: Icart[] = [];
  totalPrice: number = 0;
  //see products
  ngOnInit (): void
  {
    this.loadCart();
    this._CartService.getProductCart().subscribe( {
      next: (res) =>
      {
        console.log( res );
        this.cartItems = res.items;
        this.totalPrice = res.totalPrice;
        }
    } )
  }

  //delete one item
  deleteItem(id:any): void {
    this._CartService.removeOneProduct( id ).subscribe( {
      next: ( res ) =>
      {
        console.log( 'deleted' );
        this.cartItems = res.items;
        this.totalPrice = res.totalPrice;
        this.loadCart();
      }
    } );
  }


  //minus
  minus ( id: any ): void
  {
    this._CartService.decrease( id ).subscribe( {
      next: (res) =>
      {
        console.log( res );
        this.cartItems = res.items;
        this.totalPrice = res.totalPrice;
        this.loadCart();

      }
    })
  }
  //add
  plus ( id: any ): void
  {
    this._CartService.increase( id ).subscribe( {
      next: (res) =>
      {
        console.log( res );
        this.cartItems = res.items;
        this.totalPrice = res.totalPrice;
        this.loadCart();
      }
    })
  }

  //delete all cart
  deletecart (): void
  {
    this._CartService.deleteCart().subscribe( {
      next: (res) =>
      {
        console.log( 'res' );
        this.cartItems = res.items;
        this.totalPrice = res.totalPrice;
        this.loadCart();
      }
    })
  }


  loadCart(): void {
    this._CartService.getProductCart().subscribe({
      next: (res) => {
        this.cartItems = res.items;
        this.totalPrice = res.totalPrice;
      }
    });
  }


}
