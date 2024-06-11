import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { OwnerService } from '../../services/owner.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-owner',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './new-owner.component.html',
  styleUrl: './new-owner.component.css'
})
export class NewOwnerComponent {

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
