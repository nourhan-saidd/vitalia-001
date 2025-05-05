import { Component, inject, OnInit } from '@angular/core';
import { FlowbiteService } from '../../core/services/flowbite.service';
import { initFlowbite } from 'flowbite';
import { Iblog } from '../../core/interfaces/iblog';
import { BlogService } from '../../core/services/blog.service';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-addblog',
  standalone: true,
  imports: [
    CommonModule,
    DatePipe,
    FormsModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
  ],
  templateUrl: './addblog.component.html',
  styleUrl: './addblog.component.scss',
})
export class AddblogComponent implements OnInit
{
  constructor(private flowbiteService: FlowbiteService) {}
  private readonly _BlogService = inject(BlogService);
  savedFile!: File;
  bloglist: Iblog[] = [];
  Image = '';
  Title = '';
  Content = '';
  isEditMode: boolean = false;
  editId: any = null;

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite(() => {
      initFlowbite();
    });

    // جلب المدونات
    this._BlogService.getDoctorBlog().subscribe({
      next: (res) => {
        this.bloglist = res;
        console.log(res)
      },
    });
  }

  // دالة تغيير الصورة
  changeImg(e: Event): void {
    const input = e.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.savedFile = input.files[0];
      this.Image = URL.createObjectURL(this.savedFile); // تحديث الصورة المعروضة
    }
  }

  // دالة لإنشاء مدونة جديدة
  createblog(): void {
    const formData = new FormData();
    formData.append('Content', this.Content);
    formData.append('Title', this.Title);
    formData.append('Image', this.savedFile);
    this._BlogService.createBlog(formData).subscribe({
      next: (res) => {
        this.resetForm();
        this._BlogService.getDoctorBlog().subscribe({
          next: (res) => {
            this.bloglist = res;
          },
        });
      },
    });
  }

  // دالة لحذف المدونة
  deleteblog(id: any): void {
    this._BlogService.deleteBlog(id).subscribe({
      next: () => {
        this._BlogService.getDoctorBlog().subscribe({
          next: (res) => {
            this.bloglist = res;
          },
        });
      },
    });
  }

  // دالة لفتح الفورم للتعديل
  editBlog ( post: any ): void
  {
    console.log(post)
    this.Title = post.title;
    this.Content = post.content;
    this.Image = post.Image;
    this.savedFile = post.Image;
    this.editId = post.id;
    this.isEditMode = true;

    const modal = document.getElementById('authentication-modal');
    modal?.classList.remove('hidden');
  }

  // دالة لتحديث المدونة
  updateblog(): void {
    const updatedData = new FormData();
    updatedData.append('title', this.Title);
    updatedData.append('content', this.Content);
    if (this.savedFile) {
      updatedData.append('image', this.savedFile);
    }

    this._BlogService.updateblog(this.editId, updatedData).subscribe({
      next: (res) => {
        this.resetForm();
        this._BlogService.getDoctorBlog().subscribe({
          next: (res) => {
            this.bloglist = res;
          },
        });
      }
    });
  }

  // دالة لإعادة تعيين الفورم
  resetForm(): void {
    this.Title = '';
    this.Content = '';
    this.savedFile = null as any;
    this.Image = '';
    this.editId = null;
    this.isEditMode = false;

    const modal = document.getElementById('authentication-modal');
    modal?.classList.add('hidden');
  }
}
