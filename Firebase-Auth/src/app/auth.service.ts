import { Injectable } from '@angular/core';
import firebase from 'firebase/compat';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { signInWithEmailAndPassword, getAuth} from 'firebase/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public ngFireAuth : AngularFireAuth) { }

 

  async registerUser(email:string,password:string){
    const auth = getAuth()
    return await this.ngFireAuth.createUserWithEmailAndPassword(email,password)
  }

  async loginUser(email:string,password:string){
    return await this.ngFireAuth.signInWithEmailAndPassword(email,password)
  }

  async resetPass(email:string){
    return await this.ngFireAuth.sendPasswordResetEmail(email)
  }

  async LogOut(){
    return await this.ngFireAuth.signOut()
  }

  async getProfile(){
    return await this.ngFireAuth.currentUser
  }
}
