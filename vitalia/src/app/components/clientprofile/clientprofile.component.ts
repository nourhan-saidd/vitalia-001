import { Component, inject, OnInit } from '@angular/core';
import { AuthclientService } from '../../core/services/authclient.service';
import { Updateclientinfo } from '../../core/interfaces/updateclientinfo';
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-clientprofile',
  standalone: true,
  imports: [FormsModule,CommonModule,DatePipe],
  templateUrl: './clientprofile.component.html',
  styleUrl: './clientprofile.component.scss'
})
export class ClientprofileComponent implements OnInit
{
  //inject api
  private readonly _AuthclientService = inject( AuthclientService );
  //interface
  profilelist: Updateclientinfo[] = [];
ngOnInit(): void {
  this._AuthclientService.getInfo().subscribe( {
    next: (res) =>
    {
      console.log( res );
      this.profilelist = [res];
      }
    })
  }
  // ******************

  updateform(item: Updateclientinfo): void {

    this._AuthclientService.updateInfo(item).subscribe({
      next: (res) => {
        console.log('تم التحديث بنجاح', res);
        alert('تم تحديث البيانات بنجاح ✅');
      },
      error: (err) => {
        console.error('خطأ أثناء التحديث:', err);
        console.log('تفاصيل الخطأ:', err.message, err.status, err.error);

      }
    });
  }

}
