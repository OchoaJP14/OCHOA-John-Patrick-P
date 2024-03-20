import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { MyAssignmentPage } from './my-assignment.page';
import { MyAssignmentPageRoutingModule } from './my-assignment-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyAssignmentPageRoutingModule
  ],
  declarations: [MyAssignmentPage]
})
export class AssignmentPageModule {}
