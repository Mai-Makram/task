import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  url="https://dummyjson.com/"

  //send data between card view and form page

  productById=new Subject()

  //------------------------

  getAllProducts(){
    return this.http.get(this.url + 'products')
  }

  getSingleProduct(id:any){
    return this.http.get(this.url + 'products/'+id)
  }

  deleteProduct(id:any){
    return this.http.delete(this.url + 'products/'+id)
  }

  addProduct(product:any){
    return this.http.post(this.url +'products/add',product)
  }

  editProduct(id:any, data:any){
    return this.http.put(this.url + 'products/'+id,data)
  }
}
