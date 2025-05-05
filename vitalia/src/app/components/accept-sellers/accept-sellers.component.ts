import { Component, inject, OnInit } from '@angular/core';
import { AdminService } from '../../core/services/admin.service';
import { Getallsellers } from '../../core/interfaces/getallsellers';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-accept-sellers',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './accept-sellers.component.html',
  styleUrl: './accept-sellers.component.scss'
})
export class AcceptSellersComponent implements OnInit {
  //inject router
  private readonly _Router=inject(Router)
  //inject api
  private readonly _AdminService = inject( AdminService );
  //inject interface
  listsellers: Getallsellers[] = [];
  //get all sellers

  ngOnInit(): void {
    this._AdminService.getAllSellers().subscribe( {
      next: (res) =>
      {
        console.log( res );
        this.listsellers = res.data;
  }
})
  }
  // *********************
  showdocument(id: number): void {
    this._Router.navigateByUrl(`/admin/homeadmin/show-sellers-files/${id}`);
  }


  ////////////////////////

  accept (id:number): void
  {
    this._AdminService.acceptseller(id, 'Accepted').subscribe({
      next: (res) => {
        console.log('seller accepted successfully', res);
        this.listsellers = this.listsellers.filter(d => d.id !== id);
      },
      error: (err) => {
        console.error('Error accepting seller:', err);
      }
    });

  }

}
