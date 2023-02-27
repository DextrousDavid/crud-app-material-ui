// This is an api service! wow!
// To use this api service you have to inject it in the component you need it,
// One of the components we will inject this api service into; is the dialog component; constructor()
// i.e constructor(private api: ApiService) - check out dialog.component.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  // To post into your productList array in db.json, hosted at http://localhost:3000/productList.
  // Do>>
  postProduct(data: any) {
    return this.http.post<any>('http://localhost:3000/productList/', data);
  }

  // To do a get call from http://localhost:3000/productList,
  // Do>>
  getProduct() {
    return this.http.get<any>('http://localhost:3000/productList/');
  }

  //To update product - put
  putProduct(data: any, id: number) {
    return this.http.put<any>('http://localhost:3000/productList/' + id, data);
  }

  //To delete product
  deleteProduct(id: number) {
    return this.http.delete<any>('http://localhost:3000/productList/' + id);
  }
}
