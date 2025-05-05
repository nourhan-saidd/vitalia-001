import { Component, inject, OnInit } from '@angular/core';
import { AuthdoctorService } from '../../core/services/authdoctor.service';
import { Updatedoctorinfo } from '../../core/interfaces/updatedoctorinfo';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profiledoctor',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './profiledoctor.component.html',
  styleUrl: './profiledoctor.component.scss'
})
export class ProfiledoctorComponent implements OnInit {
  //inject api
  private readonly _AuthdoctorService = inject( AuthdoctorService );
  //interface
  listdoctor: Updatedoctorinfo[] = [];
ngOnInit(): void {
  this._AuthdoctorService.getAllinfo().subscribe( {
    next: (res) =>
    {
      console.log( res );
      this.listdoctor = [res];
  }
})
  }



// ************************************
  updateinfo (item:Updatedoctorinfo): void
  {
    const formData = new FormData();
    formData.append('fName', item.fName);
    formData.append('lName', item.lName);
    formData.append('bankAccount', item.bankAccount);
    formData.append('phone', item.phone);
    this._AuthdoctorService.updateAllinfo( formData ).subscribe( {
      next: (res) =>
      {
        console.log( res );
        alert('تم تحديث البيانات بنجاح ✅');
      }
    })
  }
}
