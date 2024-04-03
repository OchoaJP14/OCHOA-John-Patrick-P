import { Component } from '@angular/core';
import {ToastController} from '@ionic/angular'
import {AlertController} from '@ionic/angular'
import { Router } from '@angular/router';
import { AuthService } from '../authentication.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  username: string = '';
  password: string = '';

  constructor(private toastComponent: ToastController, private AlertComponent: AlertController,
    private router : Router, private AuthService : AuthService) { } 
  
    ngOnInit(): void {
      if (this.AuthService.isAuthenticated()) {
        this.router.navigate(['/dash-board']);
      }
    }

  async login() {
    
    const credentials = [
      { username: 'user1', password: 'pass1' },
      { username: 'user2', password: 'pass2' },
      { username: 'user3', password: 'pass3' },
      { username: 'user4', password: 'pass4' }
    ];

    const user = credentials.find(cred => cred.username === this.username && cred.password === this.password);

    if (user) {
      this.AuthService.login();
      this.showAlert();
      this.router.navigate(['/dash-board']);
    } else {
      this.showToast(); 
    }
  }
  

  async showToast(){
    const toast = await this.toastComponent.create({
      message: 'Login Failed',
      duration: 2000
    });
    toast.present();
  }

  async showAlert(){
    const alert = await this.AlertComponent.create({
      header: 'Login',
      subHeader:'Login Success!',
      message:'Successfully Logged In',
      buttons:['OK']
    });
    await alert.present();
  }
}
