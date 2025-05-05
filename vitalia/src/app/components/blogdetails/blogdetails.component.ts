import { Component, inject, OnInit } from '@angular/core';
import { Ishop } from '../../core/interfaces/ishop';
import { ActivatedRoute } from '@angular/router';
import { ShopService } from '../../core/services/shop.service';
import { BlogService } from '../../core/services/blog.service';
import { Iblog } from '../../core/interfaces/iblog';

@Component({
  selector: 'app-blogdetails',
  standalone: true,
  imports: [],
  templateUrl: './blogdetails.component.html',
  styleUrl: './blogdetails.component.scss'
})
export class BlogdetailsComponent implements OnInit
{

 bloglist: Iblog = {} as Iblog;
  private readonly _ActivatedRoute = inject(ActivatedRoute);
  private readonly _BlogService = inject(BlogService);
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (p) => {
        console.log(p.get('id'));
        let idproduct = p.get('id');
        //logic api
        this._BlogService.getSpecificBlog( idproduct ).subscribe( {
          next: ( res ) =>
          {
            console.log( res );
            this.bloglist = res;
          }
          });
      },
    });
}
}
