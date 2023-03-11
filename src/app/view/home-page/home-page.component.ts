import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  products:any[]=[]
  constructor(private productsService:ProductsService){}

  getSixProducts(){
    this.productsService.getAllProducts().subscribe({
      next:(res:any)=>{
        let allProducts = res.products
        this.products = allProducts.slice(0,6)
        //console.log(this.products)
        //console.log(res.products.slice(0,6))

      },error:(err:any)=>{
        console.log(err)
      }
    })
  }
  ngOnInit(){
    this.getSixProducts()
  }
}
