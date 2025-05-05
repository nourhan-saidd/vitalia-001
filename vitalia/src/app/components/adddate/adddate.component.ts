import { Idatedoctor } from './../../core/interfaces/idatedoctor';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatedoctorService } from '../../core/services/datedoctor.service';
import { Igetdate } from '../../core/interfaces/igetdate';

@Component({
  selector: 'app-adddate',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './adddate.component.html',
  styleUrl: './adddate.component.scss'
})
export class AdddateComponent implements OnInit
{
//get dates
ngOnInit(): void {
  this._DatedoctorService.getdate().subscribe( {
    next: (res) =>
    {
      console.log( res );
      this.getdatelist = res.appointments;
      }
    })
}
  //add api
  private readonly _DatedoctorService = inject( DatedoctorService );
  //interfaces
  getdatelist: Igetdate[] = [];
  listdates: Idatedoctor[] = [];
  dayOfWeek: string = '';
  fromTime: string = '';
  toTime: string = '';

//to convert time
  formatToAMPM(time24: string): string {
    const [hourStr, minuteStr] = time24.split(':');
    let hour = parseInt(hourStr, 10);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12 || 12;
    return `${hour.toString().padStart(2, '0')}:${minuteStr} ${ampm}`;
  }
    // Convert from AM/PM to 24-hour format
    convertTo24Hour(time12: string): string {
      const [time, modifier] = time12.split(' ');
      let [hours, minutes] = time.split(':').map(num => parseInt(num, 10));

      if (modifier === 'PM' && hours < 12) hours += 12;
      if (modifier === 'AM' && hours === 12) hours = 0;

      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    }
//to add date
  adddate(): void {
    const fromFormatted = this.formatToAMPM(this.fromTime);
    const toFormatted = this.formatToAMPM(this.toTime);

    const data: Idatedoctor = {
      dayOfWeek: this.dayOfWeek,
      fromTime: fromFormatted,
      toTime: toFormatted
    };
    this._DatedoctorService.adddate( data ).subscribe( {
      next: (res) =>
      {
        console.log( res );
      }

    });
  }

  //delete date
  deletedate (appointmentId:any): void
  {
    this._DatedoctorService.deletedate( appointmentId ).subscribe( {
      next: (res) =>
      {
        console.log( res );
  }
})
  }

  //update dates
  update(date: Igetdate): void {
    this.dayOfWeek = date.dayOfWeek;
    this.fromTime = this.convertTo24Hour(date.fromTime);
    this.toTime = this.convertTo24Hour(date.toTime);
    this.isEdit = true;
    this.editId = date.appointmentId;
  }


  isEdit: boolean = false;
  editId: number | null = null;

  updatedate(): void {
    if (!this.editId) return;

    const fromFormatted = this.formatToAMPM(this.fromTime);
    const toFormatted = this.formatToAMPM(this.toTime);

    const data = {
      appointmentId: this.editId,
      dayOfWeek: this.dayOfWeek,
      fromTime: fromFormatted,
      toTime: toFormatted,
      status: 'Available'
    };

    this._DatedoctorService.updatedate(data).subscribe({
      next: (res) => {
        console.log(res);

      }
    });
  }


}
