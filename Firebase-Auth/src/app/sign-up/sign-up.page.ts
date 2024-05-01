import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  email: string = '';
  password: string = '';
  name: string = '';
  retypepassword: string='';
  regForm: FormGroup;

  constructor(public formBuilder:FormBuilder, public loadControl:LoadingController, public authService : AuthService, private alertController : AlertController,
    public router : Router
  ) { }

  ngOnInit() {
    this.regForm = this.formBuilder.group({
      fullname: ['', [Validators.required]],
      email: ['', [
        Validators.required,
        Validators.email,
        Validators.pattern("[a-z0-9._%+\\-]+@[a-z0-9.\\-]+\\.[a-z]{2,}$")
      ]],
      password: ['', [
        Validators.required,
        Validators.pattern("(?=.*\\d)(?=.*[a-z])(?=.*[0-8])(?=.*[A-Z]).{8,}")
      ]],
      retypepassword: ['', [
        Validators.required,
      ]]
    })
  }

  get errorControl(){
    return this.regForm?.controls;
  }

  async signUp() {
    
    
    
    if (!this.email || !this.password || !this.retypepassword || !this.name){
      this.presentAlert('Error', 'Please Fill in All Fields');
      return;
  }
  
    if (this.password !== this.retypepassword) {
      this.presentAlert('Error', 'Password Do Not Match');
      return;
    }
     
    const user = await this.authService.registerUser(this.regForm.value.email, this.regForm.value.password).catch((error) => {
      console.log(error);
      console.error(error);
    });
  
    if (user) {
      this.router.navigate(['/sign-in']);
    } else {
      console.log('Provide Correct Values');
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
