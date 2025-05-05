import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthsellerService } from '../../core/services/authseller.service';

@Component({
  selector: 'app-seller',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,NgClass],
  templateUrl: './seller.component.html',
  styleUrl: './seller.component.scss'
})
export class SellerComponent {
  //for g
  msgerror: string = '';
  //inject services api
  private readonly _AuthsellerService = inject( AuthsellerService )
  //inject for navigate
  private readonly _Router =inject(Router)
  //for group html
  registersellerForm = new FormGroup( {
    FName: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    LName: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    email: new FormControl( null, [ Validators.required, Validators.email ] ),
    phone: new FormControl( null, [ Validators.required, Validators.pattern( /^01[0125][0-9]{8}$/ ), ] ),
    password: new FormControl( null, [ Validators.required, Validators.pattern(  /^(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d@$!%*?&]{6,}$/ ), ] ),
    rePassword: new FormControl( null, [ Validators.required, ] ),
    storename: new FormControl( null, [ Validators.required]),
    TaxNumber: new FormControl(null,[Validators.required]),
    TaxExpire: new FormControl( null, [ Validators.required ] ),
    qualitycertifications: new FormControl<any>(null, [Validators.required]),
    healthcertifications: new FormControl<any>(null, [Validators.required]),
  }, this.confirmPassword)
// ****************************************************************************
  //for submit api
  submitsellerForm(): void {
    if (this.registersellerForm.valid) {
      const formData = new FormData();
      // إضافة البيانات العادية (غير الفايلات)
      Object.keys(this.registersellerForm.value).forEach(key => {
        const value = this.registersellerForm.get(key)?.value;
        if (key === 'TaxExpire' && value) {
          const formattedDate = new Date(value).toISOString().split('T')[0];
          formData.append('TaxExpire', formattedDate);
        } else if (key !== 'qualitycertifications' && key !== 'healthcertifications' && value !== null && value !== undefined) {
          formData.append(key, String(value));
        }
      });
      // إضافة فايلات الـ "Quality Certifications"
      if (this.filesArray.length > 0) {
        this.filesArray.forEach(file => {
          formData.append('qualitycertifications', file, file.name);
        });
      }
      // إضافة فايلات الـ "Health Certifications"
      if (this.filesArrayHealth.length > 0) {
        this.filesArrayHealth.forEach(file => {
          formData.append('healthcertifications', file, file.name);
        });
      }
      // إرسال البيانات عبر الـ API
      this._AuthsellerService.sendRegisterseller(formData)
        .subscribe({
          next: (res: any) => {
            if (res.message === 'Seller registered successfully!') {
              this._Router.navigate(['/sellerlogin']);
            }
          },
          error: (err: any) => {
            this.msgerror = err.error.message;
          }
        });
    }
  }
  // *************************************************************************
  //for files
  //store files
  filesArray: File[] = [];
  filesArrayHealth: File[] = [];  // Added for health certifications

  onFileSelected(event: Event, type: string): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      if (type === 'quality') {
        this.filesArray = Array.from(input.files);
        this.registersellerForm.get('qualitycertifications')?.updateValueAndValidity();
      } else if (type === 'health') {
        this.filesArrayHealth = Array.from(input.files);
        this.registersellerForm.get('healthcertifications')?.updateValueAndValidity();
      }
    }
  }

  // ******************************************************************
  //for confirm password
  confirmPassword(g: AbstractControl) {
    if (g.get('password')?.value === g.get('rePassword')?.value) {
      return null;
    } else {
      return { missmatch: true };
    }
  }
// ***********************************************************************
  //navigate link
  navigatenow ():void {
    this._Router.navigate( ['/sellerlogin'] );
  }
}
