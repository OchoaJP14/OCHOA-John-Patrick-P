import { Component, OnInit, Input } from '@angular/core';
import { List, ListServiceService } from '../service/list-service.service';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-change-list',
  templateUrl: './change-list.page.html',
  styleUrls: ['./change-list.page.scss'],
})
export class ChangeListPage implements OnInit {
  @Input() id:string;
  list : List
  constructor( private listService:ListServiceService,
      private toastController:ToastController,
      private modalController:ModalController) { 
    
  }

  ngOnInit() {
    console.log(this.id)
    this.listService.getListById(this.id).subscribe(res =>{
      this.list = res
    })
  }

  async updateLists(){
    this.listService.updateList(this.list)
    const toast = await this.toastController.create({
      message:'List Updated!',
      duration:2000
    })
    toast.present()
    this.modalController.dismiss()
  }

  async removeLists(){
    await this.listService.deleteList(this.id)
    this.modalController.dismiss()
  }

  cancel(){
    this.modalController.dismiss()
  }
}
