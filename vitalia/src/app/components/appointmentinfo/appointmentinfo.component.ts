import { Component, inject, OnInit } from '@angular/core';
import { Iappointment } from '../../core/interfaces/iappointment';
import { AppointmentService } from '../../core/services/appointment.service';
import { Igetdate } from '../../core/interfaces/igetdate';
import { DatedoctorService } from '../../core/services/datedoctor.service';

@Component({
  selector: 'app-appointmentinfo',
  standalone: true,
  imports: [],
  templateUrl: './appointmentinfo.component.html',
  styleUrl: './appointmentinfo.component.scss'
})
export class AppointmentinfoComponent implements OnInit
{
  //interface
  listappointment: Iappointment[] = [];
   getdatelist: Igetdate[] = [];
  //api
  private readonly _AppointmentService = inject( AppointmentService );
    //add api
    private readonly _DatedoctorService = inject( DatedoctorService );
ngOnInit(): void {
  this._AppointmentService.getAllInfo().subscribe( {
    next: (res) =>
    {
      console.log( res );
      this.listappointment = [res];
  }
  } )
  //////////////
  this._DatedoctorService.getdate().subscribe( {
    next: (res) =>
    {
      console.log( res );
      this.getdatelist = res.appointments;
      }
    })
}
}
