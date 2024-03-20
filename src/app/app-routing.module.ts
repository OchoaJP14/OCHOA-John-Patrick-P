import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { Shared } from './Shared/Shared';
import { SecondPagePage } from './Second-page/Second-page.page';
const routes: Routes = [

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'Second-page',
    component: SecondPagePage,
    canActivate: [AuthenticationService]
  },
  {
    path: 'Shared',
    component: Shared,
    canActivate: [AuthenticationService]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
