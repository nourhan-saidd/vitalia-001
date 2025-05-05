import { Component, inject, OnInit } from '@angular/core';
import { AppointmentService } from '../../core/services/appointment.service';
import { Iconsultation } from '../../core/interfaces/iconsultation';
import { DatePipe } from '@angular/common';
import { Imoneydoctor } from '../../core/interfaces/imoneydoctor';

@Component({
  selector: 'app-moneydoctor',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './moneydoctor.component.html',
  styleUrl: './moneydoctor.component.scss'
})
export class MoneydoctorComponent implements OnInit {
  private readonly _AppointmentService = inject( AppointmentService );
  listconst: Iconsultation[] = [];
  listmoney: Imoneydoctor[] = [];
  ngOnInit(): void {
    this._AppointmentService.getconsultation().subscribe( {
      next: (res) =>
      {
        console.log( res );
        this.listconst = res.data;
  }
    } )


    // **************
    this._AppointmentService.getallmoney().subscribe( {
      next: (res) =>
      {
        this.listmoney = [res];
      }
    })
  }
}
