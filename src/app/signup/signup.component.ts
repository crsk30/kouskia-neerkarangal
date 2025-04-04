import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  standalone: true, 
  imports: [CommonModule, IonicModule, ReactiveFormsModule, RouterModule, HttpClientModule], 
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})


  
export class SignupComponent  implements OnInit {
  signupForm: FormGroup;
  
  constructor(private fb: FormBuilder,
        private http: HttpClient,
        private router: Router
  ) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$'), Validators.minLength(10)]],
      password: ['', [Validators.required,Validators.minLength(8)]],
      cpassword: ['', [Validators.required, Validators.minLength(8)]]
    },
    { validators: this.matchPasswordValidator } 
  );
  }

  matchPasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('cpassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  };
  ngOnInit() {}

  onSubmit() {
    console.log('Form invalid', this.signupForm);
    if (this.signupForm.valid) {
      console.log('Form Submitted:', this.signupForm.value);
      const signupFormData = this.signupForm.value;
      this.http.post('https://rqceocytbd.execute-api.ap-south-1.amazonaws.com/dev', signupFormData).subscribe(
        (response) => {
          console.log('Signup successful:', response);
          this.router.navigate(['/login']); 
        },
        (error) => {
          console.error('Signup failed:', error);
          // Handle login error (e.g., show an error message)
        }
      );
    } else {
      this.signupForm.markAllAsTouched();
    }
  }

  get name() {
    return this.signupForm.get('name');
  }

  get email() {
    return this.signupForm.get('email');
  }

  get mobile() {
    return this.signupForm.get('mobile');
  }

  get password() {
    return this.signupForm.get('password');
  }

  get cpassword() {
    return this.signupForm.get('cpassword');
  }

  hasError(controlName: string): boolean {
    const control = this.signupForm.get(controlName);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

}
