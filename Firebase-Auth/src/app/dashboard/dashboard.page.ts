import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  user:any
  constructor(public authService : AuthService, public router:Router) {
    this.user = authService.getProfile()
   }

  ngOnInit() {
  }
  async Logout(){
    this.authService.LogOut().then(()=>{
      this.router.navigate(['/sign-in'])
    })
  }
}
