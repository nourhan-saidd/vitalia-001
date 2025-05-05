import { Component, inject, OnInit } from '@angular/core';
import { AppointmentService } from '../../core/services/appointment.service';
import { CommonModule } from '@angular/common';
import { Igetdate } from '../../core/interfaces/igetdate';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-paymentdoctor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paymentdoctor.component.html',
  styleUrls: ['./paymentdoctor.component.scss'],
})
export class PaymentdoctorComponent implements OnInit {
  appointment: Igetdate[] = [];
  private readonly _AppointmentService = inject(AppointmentService);
  isLoading = false;
  appointmentId: number | null = null;

  constructor(private paymentService: AppointmentService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const appointmentIdString = this.route.snapshot.queryParamMap.get('appointmentId');
    if (appointmentIdString) {
      this.appointmentId = Number(appointmentIdString);
      if (isNaN(this.appointmentId)) {
        console.error('Invalid Appointment ID!');
      } else {
        console.log('Appointment ID from queryParams:', this.appointmentId);
      }
    } else {
      console.error('Appointment ID is missing!');
    }
  }
  startPayment() {
    if (this.appointmentId === null) {
      console.error('Appointment ID is missing!');
      return;
    }

    const id = this.appointmentId; // ده الـ appointmentId

    this.isLoading = true;

    this.paymentService.createOrder(id).subscribe({
      next: (orderRes: any) => {
        console.log('✅ Step 1 - createOrder response:', orderRes);

        const orderId = orderRes.order_id; // خد الـ order_id من الريسبونس

        this.paymentService.createWalletOrder(orderId).subscribe({
          // هنا بتبعت orderId بدل id
          next: (walletRes: any) => {
            console.log('✅ Step 2 - createWalletOrder response:', walletRes);

            const paymentKey = walletRes.payment_key;

            this.paymentService.getPaymentLink(paymentKey, id).subscribe({
              next: (linkRes: any) => {
                console.log('✅ Step 3 - getPaymentLink response:', linkRes);
                this.isLoading = false;

                window.open(linkRes.payment_link, '_blank');
              },
              error: (err) => {
                console.error('❌ Error in Step 3:', err);
                this.isLoading = false;
              }
            });
          },
          error: (err) => {
            console.error('❌ Error in Step 2:', err);
            this.isLoading = false;
          }
        });
      },
      error: (err) => {
        console.error('❌ Error in Step 1:', err);
        this.isLoading = false;
      }
    });
  }

}
