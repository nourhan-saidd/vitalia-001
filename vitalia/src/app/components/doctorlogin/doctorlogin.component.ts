import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';
import { AuthdoctorService } from '../../core/services/authdoctor.service';

@Component({
  selector: 'app-doctorlogin',
  standalone: true,
  imports: [ReactiveFormsModule,NgClass,FormsModule,RouterModule],
  templateUrl: './doctorlogin.component.html',
  styleUrl: './doctorlogin.component.scss'
})
export class DoctorloginComponent {
  //for g
  msgerror: string = '';
  //for services api
  private readonly _AuthdoctorService = inject(AuthdoctorService)
  //for navigate
  private readonly _routes = inject(Router);
  //for form html
  loginDoctorForm: FormGroup = new FormGroup(
    {
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required,Validators.pattern( /^(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d@$!%*?&]{6,}$/),]),
    }
  );
  // ***************************************************************

  //submit for api
  loginDoctorSubmit (): void {
    if (this.loginDoctorForm.valid) {
      this._AuthdoctorService.sendloginDoctor(this.loginDoctorForm.value)
        .subscribe({
          next: (res: any) => {
            if (res.token) {
              // save token
              localStorage.setItem('usertoken', res.token);

              // decode token
              this._AuthdoctorService.saveUserData();

              // navigate to home page
              this._routes.navigate(['/dashboard-doctor']);
            }
            console.log(res);
          },
          error: (err: any) => {
            this.msgerror = err.error.message;
            console.log(err);
          }
        });
    }
  }


}
