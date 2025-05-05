import { Component, inject } from '@angular/core';
import { AdminService } from '../../core/services/admin.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-adminlogin',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule , NgClass],
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.scss'
})
export class AdminloginComponent {
  //for g
  msgerror: string = '';
  //for services api
  private readonly _AdminService = inject(AdminService)
  //for navigate
  private readonly _routes = inject(Router);
  //for form html
  loginadminForm: FormGroup = new FormGroup(
    {
      username: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ] ),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d@$!%*?&]{6,}$/)
      ]),
    }
  );
  // *****************************

    //submit for api
    loginadminSubmit (): void {
      if (this.loginadminForm.valid) {
        this._AdminService.sendLoginAdmin(this.loginadminForm.value)
        .subscribe({
          next: (res: any) => {
            if (res.token) {
              localStorage.setItem('usertoken', res.token);
              this._routes.navigate(['/admin/homeadmin']);
            }
          },
          error: (err: any) => {
            console.log('Error:', err);
            this.msgerror = err.error.message;
          }
        });
      }
    }

}
