import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart.model';
import { CartUtil } from 'src/app/utils/cart.util';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  public cart: Cart = new Cart();
  public tokenConpay$!: Observable<any>

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.loadCart();
  }

  getToken(){
    let params = new HttpParams();
    params = params.append('accessKeyId', 'a73fb35eb67647509baadccbbd8f466f');
    params = params.append('secretKey-2', '$Z<;8[ny!4hBM8::"-2');

    this.http.post("https://sandbox.conpay.com.br/v2/auth/token", { params })
    .subscribe( d => console.log(d))

    this.tokenConpay$ = this.http.post("https://sandbox.conpay.com.br/v2/auth/token", { params })
  }

  public loadCart() {
    this.cart = CartUtil.get();
  }

  public total() {
    let total = 0;
    this.cart.items.forEach((item) => {
      total += (item.price * item.quantity);
    });
    return total;
  }

  public remove(item: any) {
    let index = this.cart.items.indexOf(item);
    this.cart.items.splice(index, 1);
    CartUtil.update(this.cart);
  }

  public clear() {
    CartUtil.clear();
    this.loadCart();
  }


}
