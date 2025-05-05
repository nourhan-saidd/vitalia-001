import { Component, inject, OnInit } from '@angular/core';
import { FlowbiteService } from '../../core/services/flowbite.service';
import { PostService } from '../../core/services/post.service';
import { Ipost } from '../../core/interfaces/ipost';
import { initFlowbite } from 'flowbite';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-myposts',
  standalone: true,
  imports: [CommonModule, DatePipe, FormsModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './myposts.component.html',
  styleUrl: './myposts.component.scss'
})
export class MypostsComponent implements OnInit {

  // for content in post
  content: string = '';
  // for files
  savedFile!: File;
  // for post list
  postlist: Ipost[] = [];
  // for edit post state
  isEditing: boolean = false;
  editPostId: number | null = null;

  // for flowbite
  constructor(private flowbiteService: FlowbiteService) {}
  // for API in post services
  private readonly _PostService = inject(PostService);

  ngOnInit(): void {
    this._PostService.getDoctorPosts().subscribe({
      next: (res) => {
        this.postlist = res;
        this.loadPostLikes();  // Load the like status for all posts on page load
        console.log('res is', res);
      },
      error: (err) => {
        console.error('Error fetching posts', err);
      }
    });

    // flowbite
    this.flowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
    });
  }

  // load like status from localStorage
  loadPostLikes(): void {
    this.postlist.forEach(post => {
      const storedLikeStatus = localStorage.getItem(`post_${post.id}_liked`);
      if (storedLikeStatus === 'true') {
        post.isLiked = true;
      } else {
        post.isLiked = false;
      }
    });
  }

  // for create post
  creatPost(): void {
    const formData = new FormData();
    formData.append('content', this.content);
    formData.append('image', this.savedFile);
    this._PostService.createPost(formData).subscribe({
      next: (res) => {
        console.log(res);
      }
    });
  }

  // for file input change event
  changeImg(e: Event): void {
    const input = e.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.savedFile = input.files[0];
    }
  }

  // for delete post
  deletepost(id: any): void {
    this._PostService.deletepost(id).subscribe({
      next: (res) => {
        this._PostService.getDoctorPosts();
      },
      error: (err) => {
        console.error('Error deleting post', err);
      }
    });
  }

  // for update post
  startEdit(post: Ipost): void {
    this.isEditing = true;
    this.editPostId = Number(post.id);
    this.content = post.content;

    const modal = document.getElementById('crud-modal');
    if (modal) {
      modal.classList.remove('hidden');
    }
  }

  updatepost(): void {
    if (!this.editPostId) return;

    const formData = new FormData();
    formData.append('content', this.content);
    if (this.savedFile) {
      formData.append('image', this.savedFile);
    }

    this._PostService.updatepost(this.editPostId, formData).subscribe({
      next: (res) => {
        console.log('Post updated:', res);
        this.resetForm();
        this._PostService.getDoctorPosts();  // Refresh the posts
      },
      error: (err) => {
        console.error('Error updating post', err);
      }
    });
  }

  resetForm(): void {
    this.isEditing = false;
    this.editPostId = null;
    this.content = '';
    this.savedFile = null!;

    const modal = document.getElementById('authentication-modal');
    if (modal) {
      modal.classList.add('hidden');
    }
  }

  // for like
  toggleLike(post: Ipost): void {
    const storedLikeStatus = localStorage.getItem(`post_${post.id}_liked`);
    if (storedLikeStatus === 'true') {
      post.isLiked = true;
    } else if (storedLikeStatus === 'false') {
      post.isLiked = false;
    }

    if (!post.isLiked) {
      post.likes += 1;
      post.isLiked = true;
      localStorage.setItem(`post_${post.id}_liked`, 'true');
      const formData = new FormData();
      formData.append('postId', post.id.toString());
      this._PostService.addlike(post.id, formData).subscribe({
        next: (res) => {
          console.log('Liked successfully', res);
        },
        error: (err) => {
          console.error('Error liking post:', err);
        }
      });
    } else {
      post.likes -= 1;
      post.isLiked = false;
      localStorage.setItem(`post_${post.id}_liked`, 'false');
      const formData = new FormData();
      formData.append('postId', post.id.toString());
      this._PostService.addlike(post.id, formData).subscribe({
        next: (res) => {
          console.log('Unliked successfully', res);
        },
        error: (err) => {
          console.error('Error unliking post:', err);
        }
      });
    }
  }

}
