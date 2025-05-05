import { Component, inject, OnInit } from '@angular/core';
import { AuthsellerService } from '../../core/services/authseller.service';
import { Updatesellerinfo } from '../../core/interfaces/updatesellerinfo';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profileseller',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './profileseller.component.html',
  styleUrl: './profileseller.component.scss'
})
export class ProfilesellerComponent implements OnInit {
  //inject api
  private readonly _AuthsellerService = inject( AuthsellerService );
  //interface
  listseller: Updatesellerinfo[] = [];

ngOnInit(): void {
  this._AuthsellerService.getAllInfo().subscribe( {
    next: (res) =>
    {
      this.listseller = [res];
      }
    })
}
  // *************************
  updateinfo (item:Updatesellerinfo): void
  {
    const formData = new FormData();
    formData.append('fName', item.fName);
    formData.append('lName', item.lName);
    formData.append('bankAccountinfo', item.bankAccountInfo);
    formData.append('phone', item.phone);
    formData.append('storename', item.storeName);
    this._AuthsellerService.updateAllInfo( formData ).subscribe( {
      next: (res) =>
      {
        console.log( res );
        alert('تم تحديث البيانات بنجاح ✅');
      }
    })
  }
}
