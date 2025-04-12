import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AlertController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-login',
  standalone: true, 
  imports: [CommonModule, IonicModule, ReactiveFormsModule, RouterModule], 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {
  loginForm: FormGroup;
  
  constructor(private fb: FormBuilder,
    private platform: Platform,
    private alertController: AlertController,
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
      console.log('Form Submitted:', this.loginForm.value);
      this.router.navigate(['/project-list']);
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
}
