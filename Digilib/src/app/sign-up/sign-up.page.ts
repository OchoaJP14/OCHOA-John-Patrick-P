import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  email: string = '';
  password: string = '';

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private toastController: ToastController,
    private alertController: AlertController
    
  ) {}

  ngOnInit() {}

  async signup() {
    try {
      
      const credential = await this.afAuth.createUserWithEmailAndPassword(this.email, this.password);
      this.presentToast('Signup successful!');
      this.router.navigateByUrl('/sign-in');
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        this.presentAlert('Error', 'Email is already in use.');
      } else {
        this.presentAlert('Error', 'An unknown error occurred.');
      }
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }
}
