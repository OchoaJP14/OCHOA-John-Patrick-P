import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangeListPageRoutingModule } from './change-list-routing.module';

import { ChangeListPage } from './change-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangeListPageRoutingModule
  ],
  declarations: [ChangeListPage]
})
export class ChangeListPageModule {}
