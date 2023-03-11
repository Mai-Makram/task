import { Component, ViewChild } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  constructor(private productService:ProductsService){}

  allProduct:any[]=[] 
  products:any[]=[] 


  getAllProducts(){
    this.productService.getAllProducts().subscribe({
      next:(res:any)=>{
         this.allProduct = res.products
        this.slicing()
        //console.log(this.products)
      },error:(err:any)=>{
        console.log(err)
      }
    })
  }

  slicing(){
   this.products=this.allProduct.slice(0,4); 
  }

  //--to make pagenation--
  OnPageChange(event:PageEvent){
    const startIndex = event.pageIndex *event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if(endIndex > this.allProduct.length){
      endIndex = this.allProduct.length;
    }
    this.products =this.allProduct.slice(startIndex,endIndex)
  }


  ngOnInit(){
    this.getAllProducts()
   // this.products.paginator=this.paginator
  }

}
