import { Component, inject } from '@angular/core';
import { ResetpasswordService } from '../../core/services/resetpassword.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-resetpassword',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './resetpassword.component.html',
  styleUrl: './resetpassword.component.scss',
})
export class ResetpasswordComponent {
  //inject api
  private readonly _ResetpasswordService = inject(ResetpasswordService);
  //inject router
  private readonly _Router = inject( Router );
  //inject for messages
  private readonly _ToastrService = inject( ToastrService );
  email: string = '';
  otp: string = '';
  newPassword: string = '';
  resetpassword(): void {
    const data = {
      email: this.email,
      otp: this.otp,
      newPassword: this.newPassword,
    };
    this._ResetpasswordService.resetpassword( data ).subscribe( {
      next: (res) =>
      {
        console.log( res );
        this._ToastrService.success( 'reset password success' );
        this._Router.navigateByUrl('/login');



       }
     })
  }
}
