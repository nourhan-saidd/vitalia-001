import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { OrderService } from '../../core/services/order.service';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent {
  isLoading = false;
  private readonly orderService = inject( OrderService );

  startPayment() {
    this.isLoading = true;
    let authToken = '';
    let orderId: number;
    let paymentKey = '';

    this.orderService.getAuthToken().subscribe({
      next: (authResponse) => {
        authToken = authResponse.auth_token;

        this.orderService.createOrder(authToken).subscribe({
          next: (orderResponse) => {
            orderId = orderResponse.order_id;

            this.orderService.getPaymentKey(authToken, orderId, '+201010101010', true).subscribe({
              next: (paymentKeyResponse) => {
                paymentKey = paymentKeyResponse.payment_key;

                this.orderService.getPaymentLink(paymentKey).subscribe({
                  next: (paymentLinkResponse) => {
                    const link = paymentLinkResponse.payment_link;
                    window.location.href = link;
                  }
                });
              }
            });
          }
        });
      }
    });
  }



}
