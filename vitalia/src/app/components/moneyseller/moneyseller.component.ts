import { Component, inject, OnInit } from '@angular/core';
import { ShopService } from '../../core/services/shop.service';
import { Imoneyall, Imoneyseller } from '../../core/interfaces/imoneyseller';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-moneyseller',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './moneyseller.component.html',
  styleUrl: './moneyseller.component.scss'
})
export class MoneysellerComponent implements OnInit
{
  //api
  private readonly _ShopService = inject( ShopService )
  //interface
  listorder: Imoneyseller[] = [];
  allmoney: Imoneyall = {} as Imoneyall;
ngOnInit(): void {
  this._ShopService.moneySeller().subscribe( {
    next: (res) =>
    {
      console.log( res );
      this.allmoney = res;
      this.listorder = res.orders;
  }
})
}
}
