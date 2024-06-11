import { Component } from '@angular/core';
import { OwnerService } from '../../services/owner.service';
import { Owner } from '../../models/owner';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-owner-list',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './owner-list.component.html',
  styleUrl: './owner-list.component.css'
})
export class OwnerListComponent {

  public owners : Owner[] = [];

  public constructor (private ownerService: OwnerService) {
    this.ownerService.loadOwnerData().subscribe((data) => {
      this.owners = data;
    });
  }






}
