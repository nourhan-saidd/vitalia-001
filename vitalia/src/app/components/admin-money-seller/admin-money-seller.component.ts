import { Component, inject, OnInit } from '@angular/core';
import { AdminService } from '../../core/services/admin.service';
import { Iadminmoneyseller } from '../../core/interfaces/iadminmoneyseller';

@Component({
  selector: 'app-admin-money-seller',
  standalone: true,
  imports: [],
  templateUrl: './admin-money-seller.component.html',
  styleUrl: './admin-money-seller.component.scss'
})
export class AdminMoneySellerComponent implements OnInit {
  //inject api
  private readonly _AdminService = inject( AdminService);
  //interfaces
  listsellers: Iadminmoneyseller[] = [];

  ngOnInit(): void {
    this._AdminService.getMoneyseller().subscribe( {
      next: (res) =>
      {
        this.listsellers = res.data;
        }
      })
  }
}
