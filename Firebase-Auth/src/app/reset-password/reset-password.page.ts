import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
 email:string=''
  constructor(public authService : AuthService, public router: Router, private alertController : AlertController) { }

  ngOnInit() {
  }
  async resetPassword(){
    this.authService.resetPass(this.email).then(()=>{
      console.log('reset link sent')
      this.presentAlert('success','reset link set');
      this.router.navigate(['/sign-in'])
    }).catch((error)=>{
      console.log(error);

    })
  }
  async presentAlert(header: string, message: string){
    const alert = await this.alertController.create({
      header: header,
      subHeader: message,
      buttons: ['okay']
    });
    await alert.present();
  }
}
