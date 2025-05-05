import { Ishop } from './../../core/interfaces/ishop';
import { Component, inject, OnInit } from '@angular/core';
import { ShopService } from '../../core/services/shop.service';
import { RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../../core/services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [RouterLink,CommonModule,RouterModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent implements OnInit
{
  //inject  services
  private readonly _ShopService = inject( ShopService )
  private readonly _CartService = inject( CartService )
  private readonly _ToastrService=inject(ToastrService)
  //interfac
  productlist: Ishop[] = [];
ngOnInit(): void {
  this._ShopService.getproductshop().subscribe( {
    next: ( res ) =>
    {
      console.log( res );
      this.productlist = res;
    }
  } );


  }
//add to cart
  addToCart (id:any): void
  {
    this._CartService.addProductCart( id ).subscribe( {
      next: (res) =>
      {
        console.log( res );
        this._ToastrService.success( 'product added successfully to your cart' );
  }
})
  }
}
