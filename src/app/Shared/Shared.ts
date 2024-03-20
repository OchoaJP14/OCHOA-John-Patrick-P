import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './Shared.html'
})
export class Shared implements OnInit {

  constructor(private authorizationService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {

  }
  ionViewWillEnter() {
    console.log("You will now enter shared component.")
  }
  ionViewDidEnter() {
    console.log("You did enter shared component.")
  }
  ionViewWillLeave() {
    console.log("You will now leave shared component.")
  }
  ionViewDidLeave() {
    console.log("You did leave shared component.")
  }
}
