import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonButton, ToastController } from '@ionic/angular';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


  constructor(
    private AuthenticationService: AuthenticationService,
    private route : Router,
    private toastController:ToastController,
    private alertController: AlertController) {

      
    }

  goWithAuthentication(){
    this.AuthenticationService.authenticated = true;

  }


  
  ngOnInit(): void {
    
  }

  

   username: string = ''
   password: string = ''

  async login(){
    if(this.username == 'user1'){
      if(this.password == 'pass1'){
        const alert = await this.alertController.create({
          header: "Login",
          subHeader: "Status",
          message: "Login Successfully",
          buttons: ['ok']
        });
        await alert.present();
        this.AuthenticationService.authenticated = true;
        this.route.navigate(['dashboard']);
      } else{
        const toast = await this.toastController.create({
          message: "Login Failed",
          duration:2000
        });
        toast.present();
      }
    } else if(this.username == 'user2'){
      if(this.password == 'pass2'){
        const alert = await this.alertController.create({
          header: "Login",
          subHeader: "Status",
          message: "Login Successfully",
          buttons: ['ok']
        });
        await alert.present();
        this.AuthenticationService.authenticated = true;
        this.route.navigate(['dashboard']);
      } else{
        const toast = await this.toastController.create({
          message: "Login Failed",
          duration:2000
        });
        toast.present();
      }
    } else {
      const toast = await this.toastController.create({
        message: "Login Failed",
        duration:2000
      });
      toast.present();
    }
  }

}
  