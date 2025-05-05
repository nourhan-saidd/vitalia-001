import { Getmessages } from './../../core/interfaces/getmessages';
import { Component, inject, OnInit } from '@angular/core';
import { AdminService } from '../../core/services/admin.service';

@Component({
  selector: 'app-technical-support',
  standalone: true,
  imports: [],
  templateUrl: './technical-support.component.html',
  styleUrl: './technical-support.component.scss'
})
export class TechnicalSupportComponent implements OnInit
{
  //api
  private readonly _AdminService = inject( AdminService );
  //interface
  listmessages : Getmessages[] = [];
ngOnInit(): void {
  this._AdminService.getMessages().subscribe( {
    next: (res) =>
    {
      this.listmessages = res.data;
  }
})
}
}
