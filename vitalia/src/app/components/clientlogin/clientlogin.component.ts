import { Component, inject } from '@angular/core';

import {
  AbstractControl,
  FormControl,
  FormGroup,
  NgModel,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,

} from '@angular/router';
import { AuthclientService } from '../../core/services/authclient.service';
import { error } from 'console';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-clientlogin',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule , NgClass,RouterModule],
  templateUrl: './clientlogin.component.html',
  styleUrl: './clientlogin.component.scss'
})
export class ClientloginComponent {
  //for g
  msgerror: string = '';
  //for services api
  private readonly _authClientServicse = inject(AuthclientService)
  //for navigate
  private readonly _routes = inject(Router);
  //for form html
loginClientForm: FormGroup = new FormGroup(
    {
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d@$!%*?&]{6,}$/)
      ]),
    }
  );
  // ***************************************************************
  //submit for api
  loginClientSubmit (): void {
    if (this.loginClientForm.valid) {
      this._authClientServicse.sendloginClient(this.loginClientForm.value)
      .subscribe({
        next: (res: any) => {
          if (res.token) {
            // حفظ التوكن في localStorage
            localStorage.setItem('usertoken', res.token);
            // التوجيه إلى الصفحة الرئيسية
            this._routes.navigate(['/home']);
          }
        },
        error: (err: any) => {
          console.log('Error:', err);
          this.msgerror = err.error.message;
        }
      });
    }
  }
  // ***************************************************************************************
}
