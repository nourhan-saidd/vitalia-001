import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../core/services/admin.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-show-doctors-files',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-doctors-files.component.html',
  styleUrl: './show-doctors-files.component.scss'
})
export class ShowDoctorsFilesComponent implements OnInit {
  private readonly _Router = inject(Router);
  private readonly _AdminService = inject(AdminService);
  private readonly route = inject(ActivatedRoute);
  private readonly sanitizer = inject(DomSanitizer);

  fileUrl: SafeResourceUrl | null = null;

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this._AdminService.showDoctorDocuments(id).subscribe({
      next: (fileBlob) => {
        const fileURL = URL.createObjectURL(fileBlob);
        this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(fileURL);
      },
      error: (err) => {
        console.error('Error loading file', err);
      }
    });
  }
}
