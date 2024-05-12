import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangeListPage } from './change-list.page';

const routes: Routes = [
  {
    path: '',
    component: ChangeListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangeListPageRoutingModule {}
