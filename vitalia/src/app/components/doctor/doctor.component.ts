import { Component, inject, OnInit } from '@angular/core';
import { Iappointment } from '../../core/interfaces/iappointment';
import { AppointmentService } from '../../core/services/appointment.service';
import { Iappointmentclient } from '../../core/interfaces/iappointmentclient';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-doctor',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './doctor.component.html',
  styleUrl: './doctor.component.scss',
})
export class DoctorComponent implements OnInit {
  private readonly _AppointmentService = inject(AppointmentService);
  listappointment: Iappointmentclient[] = [];
  ngOnInit(): void {
    this._AppointmentService.getInfoClient().subscribe({
      next: (res) => {
        console.log(res);
        this.listappointment = res;
      },
    });
  }
}
