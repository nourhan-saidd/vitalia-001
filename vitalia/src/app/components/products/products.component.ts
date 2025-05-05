import { initFlowbite } from 'flowbite';
import { FlowbiteService } from './../../core/services/flowbite.service';
import { Component, inject, OnInit } from '@angular/core';
import { ShopService } from '../../core/services/shop.service';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Ishop } from '../../core/interfaces/ishop';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    DatePipe,
    FormsModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  private readonly _ShopService = inject(ShopService);
  constructor(private flowbiteService: FlowbiteService) {}
//for interface
  listproduct: Ishop[] = [];
  Name: string = '';
  Price: number = 0;
  Description: string = '';
  stock: number = 0;
  savedFile: File | null = null;
//for update
  editMode: boolean = false;
  editedId: any = null;
//
  ngOnInit(): void {
    this.loadProducts();
    this.flowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
    });
  }

  loadProducts(): void {
    this._ShopService.getsellerproduct().subscribe({
      next: (res) => {
        this.listproduct = res;
      },
      error: () => {
        console.log('find the problem');
      },
    });
  }
//for save image
  changeImg(e: Event): void {
    const input = e.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.savedFile = input.files[0];
    }
  }
//for add product
  addproduct(): void {
    const formData = new FormData();
    formData.append('Name', this.Name);
    formData.append( 'Price', this.Price.toString() );
    formData.append('stock', this.stock.toString());
    formData.append('Description', this.Description);
    if (this.savedFile) {
      formData.append('Image', this.savedFile);
    }
    this._ShopService.addproduct(formData).subscribe({
      next: (res) => {
        console.log(res);
        this.resetForm();
        this.loadProducts();
      },
    });
  }


  deleteproduct(id: any): void {
    this._ShopService.deleleproduct(id).subscribe({
      next: () => {
        this.loadProducts();
      },
    });
  }
//button of edit
  startEdit(product: any): void {
    this.editMode = true;
    this.editedId = product.id;
    this.Name = product.name;
    this.Price = product.price;
    this.stock = product.stock;
    this.Description = product.description;
    const modal = document.getElementById('crud-modal');
    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }
  }
//for update
  updateproduct(): void {
    const formData = new FormData();
    formData.append('Name', this.Name);
    formData.append('Price', this.Price.toString());
    formData.append('stock', this.stock.toString());
    formData.append('Description', this.Description);
    if (this.savedFile) {
      formData.append('Image', this.savedFile);
    }
    this._ShopService.updateproduct(this.editedId, formData).subscribe({
      next: (res) => {
        console.log('Product updated ✅', res);
        this.editMode = false;
        this.editedId = null;
        this.resetForm();
        this.loadProducts();
      },
      error: (err) => {
        console.error('Error updating product ❌', err);
      },
    });
  }
//reset form
  resetForm(): void {
    this.Name = '';
    this.Price = 0;
    this.stock = 0;
    this.Description = '';
    this.savedFile = null;
  }
}
