import { Component, inject, OnInit } from '@angular/core';
import { Iappointment } from '../../core/interfaces/iappointment';
import { AppointmentService } from '../../core/services/appointment.service';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-appointmet', // غيريها لـ app-appointment لو عايزة
  standalone: true,
  imports: [FormsModule, RouterLink, RouterLinkActive,CommonModule],
  templateUrl: './appointmet.component.html',
  styleUrl: './appointmet.component.scss',
})
export class AppointmetComponent implements OnInit
{
  //inject api
  private readonly _AppointmentService = inject( AppointmentService );
  //interface
  listappointment: Iappointment[] = [];
  Name: string = '';
  ShortDescription: string = '';
  YearsOfExperience: number = 0;
  ConsultationDuration: number = 0;
  AmoutOfFeeSession: number = 0;
  Specialties: string = '';
  ServicesProvided: string = '';
  ShortBio: string = '';
  savedFile!: File;
  imageUrl: string | null = null;
  info: Iappointment | null = null;
//for get info
  ngOnInit(): void {
    this._AppointmentService.getAllInfo().subscribe({
      next: (res) => {
        console.log(res);
        this.listappointment = [res];
      },
    });
  }

  uploadphot(e: Event): void {
    const input = e.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.savedFile = input.files[0];
      this.imageUrl = URL.createObjectURL(this.savedFile);
      console.log('Selected file:', this.savedFile);
    }
  }

  createprofile(): void {
    const formdata = new FormData();
    formdata.append('Name', this.Name);
    formdata.append('ShortDescription', this.ShortDescription);
    formdata.append('YearsOfExperience', this.YearsOfExperience.toString());
    formdata.append('ConsultationDuration', this.ConsultationDuration.toString());
    formdata.append('AmoutOfFeeSession', this.AmoutOfFeeSession.toString());
    formdata.append('Specialties', this.Specialties);
    formdata.append('ServicesProvided', this.ServicesProvided);
    formdata.append('ShortBio', this.ShortBio);
    if (this.savedFile) {
      formdata.append('Image', this.savedFile);
    }
    this._AppointmentService.uploadProfile(formdata).subscribe({
      next: (res: any) => {
        console.log(res);
        this.listappointment.push(res);
        this.resetForm();
      },
    });
  }

  updateinfo(info: Iappointment): void {
    this.Name = info.name;
    this.ShortDescription = info.shortDescription;
    this.YearsOfExperience = info.yearsOfExperience;
    this.ConsultationDuration = info.consultationDuration;
    this.AmoutOfFeeSession = info.amountofFeeSession;
    this.Specialties = info.specialties;
    this.ServicesProvided = info.servicesProvided;
    this.ShortBio = info.shortBio;
    this.imageUrl = info.image ? `https://vitalia.runasp.net${info.image}` : null;
    this.info = info;
  }

  updateProfile(): void {
    const formdata = new FormData();
    formdata.append('Name', this.Name);
    formdata.append('ShortDescription', this.ShortDescription);
    formdata.append('YearsOfExperience', this.YearsOfExperience.toString());
    formdata.append('ConsultationDuration', this.ConsultationDuration.toString());
    formdata.append('AmoutOfFeeSession', this.AmoutOfFeeSession.toString());
    formdata.append('Specialties', this.Specialties);
    formdata.append('ServicesProvided', this.ServicesProvided);
    formdata.append('ShortBio', this.ShortBio);
    if (this.savedFile) {
      formdata.append('Image', this.savedFile);
    }

    this._AppointmentService.updateInfo(formdata).subscribe({
      next: (res: any) => {
        console.log('Profile updated successfully', res);
        this.resetForm();
      }
    });
  }


  private resetForm(): void {
    this.Name = '';
    this.ShortDescription = '';
    this.YearsOfExperience = 0;
    this.ConsultationDuration = 0;
    this.AmoutOfFeeSession = 0;
    this.Specialties = '';
    this.ServicesProvided = '';
    this.ShortBio = '';
    this.imageUrl = null;
    this.savedFile = null as any;
    this.info = null;
  }









  change(event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;

    if (isChecked) {
      this._AppointmentService.enable().subscribe( {
        next: (res) =>
        {
          console.log( res );
  }
})
      console.log('الزر اتفعل! هنا هتحطي الأكشن بتاعك');

    } else {

      console.log('الزر اتوقف!');
    }
  }


}
