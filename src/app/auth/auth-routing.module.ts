import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from '@layouts/main-layout/main-layout.component';
import { LoginComponent } from '@auth/pages/login/login.component';

const routes: Routes = [
  {
    path:'login',
    component:MainLayoutComponent,
    children:[
      {
        path:'',
        component:LoginComponent
      }
    ]
  },
  {
    path:'**',
    redirectTo:'login'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
