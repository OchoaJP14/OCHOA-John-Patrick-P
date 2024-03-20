import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyAssignmentPage } from './my-assignment.page';

const routes: Routes = [
  {
    path: '',
    component: MyAssignmentPage,
  }
];

@NgModule(
    {
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
}
)

export class MyAssignmentPageRoutingModule {}
