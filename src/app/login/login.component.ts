import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AlertController, Platform } from '@ionic/angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true, 
  imports: [CommonModule, IonicModule, ReactiveFormsModule, RouterModule, HttpClientModule], 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {
  loginForm: FormGroup;
  
  constructor(private fb: FormBuilder,
    private platform: Platform,
    private alertController: AlertController,
    private http: HttpClient,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit() {
    this.platform.backButton.subscribeWithPriority(10, async () => {
      this.showExitConfirm();
    });
  }
  onSubmit() {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;
      this.http.post('https://nv5hrxko61.execute-api.ap-south-1.amazonaws.com/dev', loginData).subscribe(
        (response) => {
          console.log('Login successful:', response);
        },
        (error) => {
          console.error('Login failed:', error);
          // Handle login error (e.g., show an error message)
        }
      );
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  get password() {
    return this.loginForm.get('password');
  }

  hasError(controlName: string): boolean {
    const control = this.loginForm.get(controlName);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  async showExitConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirm Exit',
      message: 'Do you really want to exit?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Exit',
          handler: () => {
            (navigator as any).app.exitApp(); 
          },
        },
      ],
    });

    await alert.present();
  }

  // async LoginSuccess() {
  //   const alert = await this.alertController.create({
  //     header: 'Login',
  //     message: 'Login success',
  //     buttons: [
  //       {
  //         text: 'Ok',
  //         role: 'Ok',
  //       },
  //       {
  //         text: 'Ok',
  //         handler: () => {
  //           this.router.navigate(['/projectlist']);
  //         },
  //       },
  //     ],
  //   });

  //   await alert.present();
  // }
}
