import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CardViewComponent } from './card-view/card-view.component';
import { MaterialModule } from './material/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavbarComponent,
    CardViewComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports:[
    NavbarComponent,
    MaterialModule,
    CardViewComponent
  ]
})
export class SharedModule { }
