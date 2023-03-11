import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { AuthGuard } from './auth/Guards/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:"",redirectTo:'/login', pathMatch:'full'}, //Default Path
  {path: "login",component:LoginComponent},
  //--lazy loading routing --
  {path:"view",loadChildren:()=>import('src/app/view/view.module').then(m=>m.ViewModule)},
  
  {path:'**',component: NotFoundComponent}  //Wild Card Path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
