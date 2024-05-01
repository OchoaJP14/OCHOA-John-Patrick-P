import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  email: string = '';
  password: string = '';
  
  loginform : FormGroup
  constructor(public formBuilder:FormBuilder, public loadControl:LoadingController, public authService : AuthService, public router : Router,
    private alertController : AlertController
  ) { }

  ngOnInit() {
    this.loginform = this.formBuilder.group({
      email :['', [
        Validators.required,
        Validators.email,
        Validators.pattern("[a-z0-9._%+\\-]+@[a-z0-9.\\-]+\\.[a-z]{2,}$")
      ]],
      password:['',[
        Validators.required
      ]]
    })
  }

  get errorControl(){
    return this.loginform?.controls;
  }

  async signIn(){
    if (!this.email || !this.password){
      this.presentAlert('Error', 'Invalid input');
      return;
  }
    
    if(this.loginform?.valid){
      const user = await this.authService.loginUser(this.loginform.value.email,this.loginform.value.password).catch((error)=>{
        console.log(error);
        this.presentAlert('Failed', 'Invalid Input')
      })
      if(user){
        
        this.router.navigate(['/dashboard'])
      } else {
        console.log('Provide Correct Values');
      }
    }
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
