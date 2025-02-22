import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true, 
  imports: [CommonModule, IonicModule, ReactiveFormsModule, RouterModule], 
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent  implements OnInit {
  signupForm: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      password: ['', Validators.required],
      cpassword: ['', Validators.required]
    });
  }
  ngOnInit() {}

  onSubmit() {
    if (this.signupForm.valid) {
      console.log('Form Submitted:', this.signupForm.value);
    } else {
      this.signupForm.markAllAsTouched();
    }
  }

  hasError(controlName: string): boolean {
    const control = this.signupForm.get(controlName);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

}
