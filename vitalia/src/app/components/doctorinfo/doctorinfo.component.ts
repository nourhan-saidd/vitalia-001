import { Component, inject, OnInit } from '@angular/core';
import { AppointmentService } from '../../core/services/appointment.service';
import { Iappointmentclientinfo } from '../../core/interfaces/iappointmentclientinfo';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Idateinfoclient } from '../../core/interfaces/idateinfoclient';

@Component({
  selector: 'app-doctorinfo',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './doctorinfo.component.html',
  styleUrl: './doctorinfo.component.scss',
})
export class DoctorinfoComponent implements OnInit {
  //api
  private readonly _AppointmentService = inject(AppointmentService);
  private readonly _ActivatedRoute = inject(ActivatedRoute);
  //interface
  listappointment: Iappointmentclientinfo[] = [];
  listdates: Idateinfoclient[] = [];

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (p) => {
        let id = p.get('id');
        if (id) {
          this._AppointmentService.getAllInfoClient(id).subscribe({
            next: (res) => {
              this.listappointment = [ res ];
              console.log( res );
            },
          });

          this._AppointmentService.getdate(id).subscribe({
            next: (res) => {
              this.listdates = res.appointments;
            },
          });
        }
      },
    });
  }
  // ****************************
}
