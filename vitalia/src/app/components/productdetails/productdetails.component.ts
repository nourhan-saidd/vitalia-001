import { Ishop } from './../../core/interfaces/ishop';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShopService } from '../../core/services/shop.service';
import { CartService } from '../../core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.scss',
})
export class ProductdetailsComponent implements OnInit {

  datailsproduct: Ishop = {} as Ishop;
  private readonly _ActivatedRoute = inject(ActivatedRoute);
  private readonly _ShopService = inject( ShopService );
  private readonly _CartService = inject( CartService );
    private readonly _ToastrService=inject(ToastrService)
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (p) => {
        console.log(p.get('id'));
        let idproduct = p.get('id');
        //logic api
        this._ShopService.getspecificprodut(idproduct).subscribe({
          next: (res) => {
            console.log(res);
            this.datailsproduct = res;
          }
        });

      },
    });
  }


  //send date of product to backend
  addToCart ( id:any): void
  {
    this._CartService.addProductCart( id ).subscribe( {
      next: (res) =>
      {
        console.log( res );
        this._ToastrService.success('product added successfully to your cart')
      }
    })
  }
}
