import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private route : Router) { }

  ngOnInit() {
  }

  logout(){
    this.route.navigate(['home']);
    localStorage.setItem('username','');
    localStorage.setItem('password','');
  }

}