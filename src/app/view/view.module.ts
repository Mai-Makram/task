import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/Guards/auth.guard';
import { SharedModule } from '../shared/shared.module';
import { FormPageComponent } from './form-page/form-page.component';
import { FormsModule } from '@angular/forms';

const routes: Routes =[
  {path:"",redirectTo:'/view/home', pathMatch:'full'},
  {path:'home',component:HomePageComponent,canActivate:[AuthGuard]},
  {path:'products',component:ProductsComponent},
  {path:'details/:id',component:ProductDetailsComponent},
  {path:'forms/:ids',component:FormPageComponent}
]

@NgModule({
  declarations: [
    HomePageComponent,
    ProductsComponent,
    ProductDetailsComponent,
    FormPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],exports:[
    RouterModule,
    FormsModule
  ]
})
export class ViewModule { }
