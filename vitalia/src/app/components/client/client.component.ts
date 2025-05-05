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
  RouterOutlet,
} from '@angular/router';
import { AuthclientService } from '../../core/services/authclient.service';
import { error } from 'console';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    NgClass,
    FormsModule,
  ],
  templateUrl: './client.component.html',
  styleUrl: './client.component.scss',
})
export class ClientComponent
{
  //for g
  msgerror: string = '';
  //for services api
  private readonly _authClientServicse = inject(AuthclientService)
  //for navigate
  private readonly _routes = inject(Router);
  //for form html
  registerClientForm: FormGroup = new FormGroup(
    {
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


      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, [ Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/),]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d@$!%*?&]{6,}$/)
      ]),
      rePassword: new FormControl(null),
      age: new FormControl(null, [Validators.required, Validators.min(15)]),
      gender: new FormControl(null, [Validators.required]),
      Hight: new FormControl(null, [Validators.required]),
      Wight: new FormControl(null, [Validators.required]),
    },
    this.confirmPassword
  );
  // ***************************************************************

  //submit for api
    registerClientSubmit (): void
    {
      if (this.registerClientForm.valid)
      {
        this._authClientServicse.sendRegisterClient(
          this.registerClientForm.value
        ).subscribe(
          {
            next: ( res: any ) =>

            {
              console.log("Response from API:", res);
              if (res.message === 'Client registered successfully!')
              {

                this._routes.navigate( [ '/clientlogin' ] )
              }
            },
          error: ( err: any ) =>
            {
              this.msgerror = err.error.message;

            }
          } );
  }
    }

  // *****************************************************************************

  //for confirm password

  confirmPassword(g: AbstractControl) {
    if (g.get('password')?.value === g.get('rePassword')?.value) {
      return null;
    } else {
      return { missmatch: true };
    }
  }

  //navigate link
  navigatenow ():void
    {
    this._routes.navigate( [ '/clientlogin' ] );
  }
}
