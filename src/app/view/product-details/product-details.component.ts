import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  constructor(private productsService:ProductsService,private route:ActivatedRoute){}

  product:any={}
  id:string=this.route.snapshot.params['id']

  getSingleProduct(){
    this.productsService.getSingleProduct(this.id).subscribe({
      next:(res:any)=>{
        console.log(res)
        this.product=res
      },error:(err:any)=>{
        console.log(err)
      }
    })
  }

  ngOnInit(){
    this.getSingleProduct()
  }
}
