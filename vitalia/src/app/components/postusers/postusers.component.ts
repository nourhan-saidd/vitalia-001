import { CommonModule, DatePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FlowbiteService } from '../../core/services/flowbite.service';
import { PostService } from '../../core/services/post.service';
import { Ipost } from '../../core/interfaces/ipost';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-postusers',
  standalone: true,
  imports: [CommonModule,DatePipe,FormsModule,RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './postusers.component.html',
  styleUrl: './postusers.component.scss'
})
export class PostusersComponent implements OnInit {
//for send date
  creatPost (): void
  {
    const formData = new FormData;
    formData.append( 'content', this.content )
    formData.append( 'image', this.savedFile )
    this._PostService.createPost( formData ).subscribe( {
      next: (res) =>
      {
console.log(res)
      }

    })
  }
  // for flowbite
  constructor(private flowbiteService: FlowbiteService) {}
  //for api in post services
  private readonly _PostService = inject( PostService )
  //for interface
  postlist: Ipost[] = [];
  //for content in post
  content: string = '';

  //for get all posts
  ngOnInit(): void {
    this._PostService.getAllPosts().subscribe({
      next: (res) => {
        console.log('res is', res);
        this.postlist = res;
        this.loadPostLikes();  // Load the like status for all posts on page load
      },
      error: (err) => {
        console.error('Error fetching posts', err);
      }
    });


    // تهيئة Flowbite
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

//for files
  savedFile!: File;
  changeImg (e:Event): void
  {
    const input = e.target as HTMLInputElement
    if (input.files && input.files.length >0)
    {
      this.savedFile = input.files[ 0 ];

    }
  }
  //for likes

  toggleLike(post: Ipost) {
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
