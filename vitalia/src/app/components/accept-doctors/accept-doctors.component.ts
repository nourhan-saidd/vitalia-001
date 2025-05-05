import { Component,  inject, OnInit } from '@angular/core';
import { Getalldoctors } from '../../core/interfaces/getalldoctors';
import { AdminService } from '../../core/services/admin.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accept-doctors',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './accept-doctors.component.html',
  styleUrl: './accept-doctors.component.scss'
})
export class AcceptDoctorsComponent implements OnInit
{
  //inject router
  private readonly _Router=inject(Router)
  //inject api
  private readonly _AdminService = inject( AdminService );
  //inject interface
  listdoctors: Getalldoctors[] = [];
  //get doctors from api

  ngOnInit(): void {
    this._AdminService.getAllDoctors().subscribe( {
      next: (res) =>
      {
        console.log( res );
        this.listdoctors = res.data;
  }
})
  }
  //////////////
  showdocument(id: number): void {
    this._Router.navigateByUrl(`/admin/homeadmin/show-doctors-files/${id}`);
  }
  //////////////////////////
  accept (id:number): void
  {
    this._AdminService.acceptDoctor(id, 'Accepted').subscribe({
      next: (res) => {
        console.log('Doctor accepted successfully', res);
        this.listdoctors = this.listdoctors.filter(d => d.id !== id);
      },
      error: (err) => {
        console.error('Error accepting doctor:', err);
      }
    });

  }
}
