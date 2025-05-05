import { Component, inject, OnInit } from '@angular/core';
import { Iblog } from '../../core/interfaces/iblog';
import { BlogService } from '../../core/services/blog.service';
import { RouterLink } from '@angular/router';

@Component( {
  selector: 'app-blog',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
} )
export class BlogComponent implements OnInit
{
  //for interface
  private readonly _BlogService = inject( BlogService );
  //for interface
  savedFile!: File;
  bloglist: Iblog[] = [];

  //for save files
  changeImg ( e: Event ): void
  {
    const input = e.target as HTMLInputElement;
    if ( input.files && input.files.length > 0 )
    {
      this.savedFile = input.files[ 0 ];
    }
  }
  //on open
  ngOnInit (): void
  {
    //for set product
    this._BlogService.getUserBlog().subscribe( {
      next: ( res ) =>
      {
        console.log( res );
        this.bloglist = res;
        console.log( this.bloglist );
        

      }
    } )
  }
}
