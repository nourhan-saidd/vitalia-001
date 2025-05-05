import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthsellerService } from '../../core/services/authseller.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sellerlogin',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,NgClass,RouterModule],
  templateUrl: './sellerlogin.component.html',
  styleUrl: './sellerlogin.component.scss'
})
export class SellerloginComponent {
//for g
  msgerror: string = '';
  //for services api
  private readonly _AuthsellerService = inject(AuthsellerService)
  //for navigate
  private readonly _routes = inject(Router);
  //for form html
  loginsellerForm: FormGroup = new FormGroup(
    {
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl( null, [ Validators.required, Validators.pattern(  /^(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d@$!%*?&]{6,}$/ ), ] ),
    }
  );
  // ***************************************************************

  //submit for api
  loginsellerSubmit (): void
    {
      if (this.loginsellerForm.valid)
      {
        //
        this._AuthsellerService.sendloginseller(this.loginsellerForm.value).subscribe({
          next: (res: any) => {
            if (res.token) {
              localStorage.setItem('usertoken', res.token);
              this._AuthsellerService.saveUserData();
              this._routes.navigate(['/dashboard-seller']);
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
