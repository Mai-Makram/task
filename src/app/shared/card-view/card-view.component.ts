import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent {
  @Input() sendproduct:any={}
 
  constructor(private productService:ProductsService, private authService:AuthService,private router:Router){}

  //--get id for edit and send to product service then to form page--
  getIdForEdit(id:any){
    this.productService.getSingleProduct(id).subscribe({
      next:(res:any)=>{
        console.log(res)
        this.productService.productById.next(res)
        this.router.navigateByUrl('view/forms/1')

      }
    })
  }

  deleteProduct(id:any){
    this.productService.deleteProduct(id).subscribe({
      next:(res:any)=>{
        console.log(res)
      },error:(err:any)=>{
        console.log(err)
      }
    })
  }

  ngOninit(){
  
  }

}
