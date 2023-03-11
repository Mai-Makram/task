import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent implements AfterViewInit {
constructor(private authService:AuthService,private productService:ProductsService,private route:ActivatedRoute ){}

switchForms:boolean=false

//---input value
product:any={}
title:string = "";
description:string = "";
price!:number;
discountPercentage!:number;
rating!:number;
currId!:number;
//-----
//@ViewChild('nameInp') nameInpElem!:ElementRef;

  getProduct(){
    //to get data product from card view
    this.productService.productById.subscribe((res:any)=>{
      this.product=res
      this.title = res.title;
      this.description = res.description;
      this.price = res.price;
      this.discountPercentage = res.discountPercentage;
      this.rating = res.rating;
    })
  }

  //to switch betwee add and edit in the same form
  switchForm(){
    if(this.currId==1){
      this.switchForms = true
      this.getProduct()
    }else{
      this.switchForms = false
    }
  }
  //-----------

  addEditProduct(product:any){
    if(this.currId==2){
      //to add data in server
      this.productService.addProduct(product).subscribe({
        next:(res:any)=>{
          console.log(res)
        },error:(err:any)=>{
          console.log(err)
        }
      })
    }else{
      //to edit data in server
      this.productService.editProduct(product,this.product.id).subscribe({
        next:(res:any)=>{
          console.log(res)
        },error:(err:any)=>{
          console.log(err)
        }
      })
    }
    
  }


  ngOnInit(){
    //to can navigate to the same component and get parameter
    this.route.paramMap.subscribe((paramap)=>{
      this.currId = Number(paramap.get('ids'));
      this.switchForm()
     
      console.log(this.currId)
    })

  }

  ngAfterViewInit(): void {
    ///this.nameInpElem.nativeElement.value=this.title;
  }
}
