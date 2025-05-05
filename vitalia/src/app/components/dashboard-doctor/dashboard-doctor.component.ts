import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthdoctorService } from '../../core/services/authdoctor.service';
import { Iphotodoctor } from '../../core/interfaces/iphotodoctor';
import { Inamedoctor } from '../../core/interfaces/inamedoctor';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-doctor',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,RouterOutlet,CommonModule],
  templateUrl: './dashboard-doctor.component.html',
  styleUrl: './dashboard-doctor.component.scss'
})
export class DashboardDoctorComponent implements OnInit
{



  private readonly _AuthdoctorService = inject( AuthdoctorService );

//for apload photo
  uploadProfilePhoto (): void
  {
    const formData = new FormData;
    formData.append( 'image', this.savedFile );
    this._AuthdoctorService.uploadProfilePhoto( formData ).subscribe( {
      next: (res) =>
      {
console.log(res)
      }
    })
  }
//for save image
  savedFile!: File;
  changeImg (e:Event): void
  {
    const input = e.target as HTMLInputElement
    if (input.files && input.files.length >0)
    {
      this.savedFile = input.files[ 0 ];

    }
  }
  //interface picture..names
  photolist: string | null = null;
  listname: Inamedoctor = { fname: '', lname: '' };
  //set picture

  ngOnInit(): void {
    this._AuthdoctorService.setProfilePhoto().subscribe({
      next: (res) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          this.photolist = reader.result as string;
        };
        reader.readAsDataURL(res);
      },
      error: (err) => {
        console.error('Error fetching photo', err);
      }
    } );
//name of doctor
    this._AuthdoctorService.getDoctorName().subscribe({
      next: ( res ) =>
      {
        this.listname = {
          fname: res.fName,
          lname: res.lName
        };
      },
      error: (err) => {
        console.error('Error fetching doctor names', err);
      }
    });

  }



}
