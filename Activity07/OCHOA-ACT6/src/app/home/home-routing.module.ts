import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { DashBoardPage } from '../dash-board/dash-board.page';
import { AuthGuard } from '../authenticate.guard';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'dash-board',
    component: DashBoardPage,
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
