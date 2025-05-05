import { Component, inject, OnInit } from '@angular/core';
import { Iphonedoctor } from '../../core/interfaces/iphonedoctor';
import { AppointmentService } from '../../core/services/appointment.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'; // إضافة Router

@Component({
  selector: 'app-phoneclientdoctor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './phoneclientdoctor.component.html',
  styleUrls: ['./phoneclientdoctor.component.scss']
})
export class PhoneclientdoctorComponent implements OnInit {
  appointmentId: string | null = null; // الـ appointmentId ممكن يكون null

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // هنا بنضيف تحقق إذا كان الـ appointmentId موجود
    this.appointmentId = this.route.snapshot.paramMap.get('id');
    if (this.appointmentId) {
      console.log('Appointment ID:', this.appointmentId); // هنا تقدر تستخدم الـ appointmentId
    } else {
      console.error('Appointment ID is missing!'); // لو مفيش id في الرابط
    }
  }

  // api
  private readonly _AppointmentService = inject(AppointmentService);

  // interface
  listphone: Iphonedoctor = { phone: '' };
  phone: string = '+201010101010';

  senddata(): void {
    const data: Iphonedoctor = {
      phone: this.phone,
    };
    this._AppointmentService.senddataphone(data).subscribe({
      next: (res) => {
        console.log(res);
      }
    });
  }

  // دالة لتوجيه المستخدم لصفحة الدفع
  goToPaymentPage(): void {
    if (this.appointmentId) {
      this.router.navigate(['/paymentdoctor'], {
        queryParams: { appointmentId: this.appointmentId }
      });
    }
  }
}
