import { Component, inject, OnInit } from '@angular/core';
import { AppointmentService } from '../../core/services/appointment.service';
import { Iconsultation } from '../../core/interfaces/iconsultation';

@Component({
  selector: 'app-consultation',
  standalone: true,
  imports: [],
  templateUrl: './consultation.component.html',
  styleUrl: './consultation.component.scss'
})
export class ConsultationComponent implements OnInit {
  private readonly _AppointmentService = inject( AppointmentService );
  listcons: Iconsultation[] = [];
ngOnInit(): void {
  this._AppointmentService.getconsultation().subscribe( {
    next: (res) =>
    {
      console.log( res );
      this.listcons = res.data;
      }
    })
}
}
