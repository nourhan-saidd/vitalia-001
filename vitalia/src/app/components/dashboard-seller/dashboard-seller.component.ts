import { Component, inject } from '@angular/core';
import { NavsellerComponent } from "../navseller/navseller.component";
import { FooterComponent } from "../footer/footer.component";
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthsellerService } from '../../core/services/authseller.service';
import { Seller } from '../../core/interfaces/seller';

@Component({
  selector: 'app-dashboard-seller',
  standalone: true,
  imports: [NavsellerComponent, FooterComponent,RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './dashboard-seller.component.html',
  styleUrl: './dashboard-seller.component.scss'
})
export class DashboardSellerComponent {


  private readonly _AuthsellerService = inject( AuthsellerService );

//for apload photo
  uploadProfilePhoto (): void
  {
    const formData = new FormData;
    formData.append( 'image', this.savedFile );
    this._AuthsellerService.uploadProfilePhoto( formData ).subscribe( {
      next: (res) =>
      {
console.log(res)
      }
    })
  }
//for save image
  savedFile!: File;
  changeImg (e:Event): void
  {
    const input = e.target as HTMLInputElement
    if (input.files && input.files.length >0)
    {
      this.savedFile = input.files[ 0 ];

    }
  }
  //interface picture..names
  photolist: string | null = null;
  listname: Seller = { fname: '', lname: '', image: '' };




  //set picture

  ngOnInit(): void {
    this._AuthsellerService.setProfilePhoto().subscribe({
      next: (res) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          this.photolist = reader.result as string;
        };
        reader.readAsDataURL(res);
      },
      error: (err) => {
        console.error('Error fetching photo', err);
      }
    } );
    //name of doctor
    this._AuthsellerService.getSellerName().subscribe({
      next: (res) => {
        console.log(res);
        this.listname = {
          fname: res.fName,
          lname: res.lName,
          image: ''
        };
      },
      error: (err) => {
        console.error('Error fetching seller name', err);
      }
    });
  }

}
