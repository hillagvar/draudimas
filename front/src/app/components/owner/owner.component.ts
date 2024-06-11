import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OwnerService } from '../../services/owner.service';
import { Owner } from '../../models/owner';

@Component({
  selector: 'app-owner',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './owner.component.html',
  styleUrl: './owner.component.css'
})
export class OwnerComponent {

  public ownerForm: FormGroup;

  constructor(private ownerService: OwnerService) {
    this.ownerForm = new FormGroup({
      "name": new FormControl(null),
      "surname": new FormControl(null),
      "phone": new FormControl(null),
      "email": new FormControl(null),
      "address": new FormControl(null),
    });

  };

  public onSubmit() {
    this.ownerService.addOwner(this.ownerForm.value).subscribe(() => {
      this.ownerForm.reset();
      console.log('prisidejo, lets hope');
    });
  }



}
