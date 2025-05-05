import { Component, inject, OnInit } from '@angular/core';
import { AdminService } from '../../core/services/admin.service';
import { Iadminmoneydoctor } from '../../core/interfaces/iadminmoneydoctor';

@Component({
  selector: 'app-admin-money-doctor',
  standalone: true,
  imports: [],
  templateUrl: './admin-money-doctor.component.html',
  styleUrl: './admin-money-doctor.component.scss'
})
export class AdminMoneyDoctorComponent implements OnInit {
  //inject api
  private readonly _AdminService = inject( AdminService );
  //interfaces
  listdoctors: Iadminmoneydoctor[] = [];

  ngOnInit(): void {
    this._AdminService.getMoneydoctor().subscribe( {
      next: (res) =>
      {
        this.listdoctors = res.data;
        }
      })
  }
}
