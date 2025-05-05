import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthdoctorService } from '../../core/services/authdoctor.service';
import { error } from 'console';
import { Router } from '@angular/router';


@Component({
  selector: 'app-doctors',
  standalone: true,
  imports: [ReactiveFormsModule,NgClass],
  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.scss'
})
export class DoctorsComponent
{
  //for g
  msgerror: string = '';
  //inject services api
  private readonly _AuthdoctorService = inject( AuthdoctorService )
  //inject for navigate
  private readonly _Router =inject(Router)
//for group html
  registerDoctorsForm = new FormGroup( {
    FName: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ] ),
    LName: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ] ),
    email: new FormControl( null, [ Validators.required, Validators.email ] ),
    phone: new FormControl( null, [ Validators.required, Validators.pattern( /^01[0125][0-9]{8}$/ ), ] ),
    password: new FormControl( null, [ Validators.required, Validators.pattern( /^(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d@$!%*?&]{6,}$/ ), ] ),
    rePassword: new FormControl( null ),
    LicenseNumber: new FormControl(null,[Validators.required]),
    LicenseExpire: new FormControl( null, [ Validators.required ] ),
    Certifications: new FormControl<any>(null, [Validators.required])

  },
  this.confirmPassword
  )

// ********************************************************


//for submit api
submitDoctorForm(): void {
  if (this.registerDoctorsForm.valid) {
    const formData = new FormData();
    // add data to form
    Object.keys(this.registerDoctorsForm.value).forEach(key => {
      const value = this.registerDoctorsForm.get(key)?.value;
      if (key === 'LicenseExpire' && value) {
        const formattedDate = new Date(value).toISOString().split('T')[0];
        formData.append('LicenseExpire', formattedDate);
      } else if (key !== 'Certifications' && value !== null && value !== undefined) {
        formData.append(key, String(value));
      }
    });
    this.filesArray.forEach(file => {
      formData.append('Certifications', file, file.name);
    });
    this._AuthdoctorService.sendRegisterDoctor(formData)
      .subscribe({
        next: (res: any) => {
          if (res.message === 'Doctor registered successfully!') {
            this._Router.navigate(['/doctorlogin']);
          }
        },
        error: (err: any) => {
          this.msgerror = err.error.message;
        }
      });
  }
  }
// *************************************************************************
  //for files
  //store files
  filesArray: File[] = [];
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      // إضافة الملفات إلى المصفوفة
      this.filesArray = Array.from(input.files);

      // تحديث النموذج فقط بإشارة أن الملفات تم رفعها
      this.registerDoctorsForm.get('Certifications')?.updateValueAndValidity();
    }
  }





  // ******************************************************************
 //for confirm password
  confirmPassword(g: AbstractControl) {
    if (g.get('password')?.value === g.get('rePassword')?.value) {
      return null;
    } else {
      return { missmatch: true };
    }
  }


// ******************************************************
 //navigate link
 navigatenow ():void
 {
 this._Router.navigate( [ '/doctorlogin' ] );
}
}




