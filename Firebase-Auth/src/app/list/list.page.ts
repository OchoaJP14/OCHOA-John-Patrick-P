import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';
import { IonModal, ToastController, AlertController, ModalController } from '@ionic/angular';
import { List, ListServiceService } from '../service/list-service.service';
import { Router } from '@angular/router';
import { ChangeListPage } from '../change-list/change-list.page';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  @ViewChild(IonModal) modal: IonModal;


  userId:any
name:string;
age:number;
isActive:boolean;
createdAt:Date;
description:string;

lists:List[]=[]

  constructor(private authService:AuthService, 
    private listService:ListServiceService,
    private toastController:ToastController,
    private alertController:AlertController,
    private modalController:ModalController,
    private router:Router) { }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
    this.addList()
  }

  addList(){
    this.listService.addList({userId:"",name:this.name,age:this.age,isActive:this.isActive,createdAt:this.createdAt,description:this.description})
    .then(async ()=>{
      const toast = await this.toastController.create({
        message:"List Added successfully!",
        duration:2000
      })
      toast.present()
    }).catch(async (error)=>{
      const alert = await this.alertController.create({
        header: "ERROR!",
        subHeader: "Ooops something went wrong",
        buttons: ['okay']
      })
      alert.present()
    })
  }

  async openList(list:List){
    const modal = await this.modalController.create({
      component:ChangeListPage,
      componentProps:{id:list.id}
    })
    await modal.present()
  }

  ngOnInit() {
    this.authService.getProfile().then(user=>{
      this.userId = user.uid
      console.log(this.userId)
      this.listService.getList(this.userId).subscribe(res =>{
        this.lists = res
        console.log(this.lists)
      })
    })
  }

  goToDashboard(){
    this.router.navigate(['/dashboard'])
  }
}
