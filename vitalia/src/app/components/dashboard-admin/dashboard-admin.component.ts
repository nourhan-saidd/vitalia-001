import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AdminService } from '../../core/services/admin.service';

@Component({
  selector: 'app-dashboard-admin',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    NgClass,
    FormsModule,
  ],
  templateUrl: './dashboard-admin.component.html',
  styleUrl: './dashboard-admin.component.scss',
})
export class DashboardAdminComponent
{


  //for g
  msgerror: string = '';
  //for services api
  private readonly _AdminService = inject(AdminService)
  //for navigate
  private readonly _routes = inject(Router);


  // for form group register
  registerAdminForm: FormGroup = new FormGroup(
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
      confirmPassword: new FormControl( null ),
      confirmAdmin: new FormControl( null, [
        Validators.required,
        Validators.pattern(/^YourSecretAdminPassword123!$/)

      ])
    },
    this.confirmPassword
  );

// **********************************************




registerAdminSubmit (): void
    {
      if (this.registerAdminForm.valid)
      {
        this._AdminService.sendRegisterAdmin(
          this.registerAdminForm.value
        ).subscribe(
          {
            next: ( res: any ) =>

            {
              console.log("Response from API:", res);
              if (res.message === 'Admin registered successfully!')
              {

                this._routes.navigateByUrl('/admin/adminlogin');
              }
            },
          error: ( err: any ) =>
            {
              this.msgerror = err.error.message;

            }
          } );
  }
    }





  // ****************************
  //for confirm password

  confirmPassword ( g: AbstractControl) {
    if (g.get('password')?.value === g.get('confirmPassword')?.value) {
      return null;
    } else {
      return { missmatch: true };
    }
  }
// ***********************************
  //navigate link
  navigatenow ():void
    {
this._routes.navigateByUrl('/admin/adminlogin');
  }
}
