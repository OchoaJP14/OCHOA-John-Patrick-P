import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { Firestore, addDoc, collection, collectionData, query, where, doc, docData, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';



export class List{
  id?:string;
  userId:string;
  name:string;
  age: number;
  isActive: boolean;
  description:string;
  createdAt:Date;

  constructor(userId:string,name:string,age: number,
    isActive: boolean, createdAt:Date, description:string){
      this.userId = userId;
      this.name = name;
      this.age = age;
      this.isActive = isActive;
      this.createdAt = createdAt;
      this.description = description;
  }

}

@Injectable({
  providedIn: 'root'
})
export class ListServiceService {

  userId:any
  constructor(private authService :AuthService, private firestore: Firestore) { 
    this.authService.getProfile().then(user =>{
      this.userId = user.uid
      console.log(this.userId)
    })
  }

  addList(list:List){
    list.userId = this.userId;
    const listRef = collection(this.firestore, "List")
    return addDoc(listRef,list)
  }

  getList(userId:any) : Observable<List[]>{
    const ListRef = collection(this.firestore, 'List')
    const refQuery = query(ListRef,where('userId','==',userId))
    return collectionData(refQuery,{idField:'id'}) as Observable <List[]>
  }

  getListById(id:any) : Observable<List> {
    const ListyRef = doc(this.firestore, `List/${id}`)
    return docData(ListyRef , {idField:'id'}) as Observable <List>
  }

  updateList(list:List){
    const ListRefy = doc(this.firestore,`List/${list.id}`)
    return updateDoc(ListRefy, {name:list.name, age:list.age, isActive:list.isActive, createdAt:list.createdAt, description:list.description })
  }

  deleteList(id:any){
    const ListyRefy = doc(this.firestore,`List/${id}`)
    return deleteDoc(ListyRefy)
  }
}
