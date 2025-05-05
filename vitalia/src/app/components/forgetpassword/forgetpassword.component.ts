import { Component, inject } from '@angular/core';
import { ResetpasswordService } from '../../core/services/resetpassword.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './forgetpassword.component.html',
  styleUrl: './forgetpassword.component.scss',
})
export class ForgetpasswordComponent {
  //inject api
  private readonly _ResetpasswordService = inject(ResetpasswordService);
  //inject router
  private readonly _Router=inject(Router)
  email: string = '';
  sendootp(): void {
    const data = {
      email: this.email,
    };

    this._ResetpasswordService.forgetpassword( data ).subscribe( {
      next: (res) =>
      {
        console.log( res );
        this._Router.navigateByUrl('/resetpassword');


      }
    })
  }
}
