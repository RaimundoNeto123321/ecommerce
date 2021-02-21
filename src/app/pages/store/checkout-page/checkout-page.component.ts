import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html'
})
export class CheckoutPageComponent implements OnInit {

  constructor(private http: HttpClient) { }
  
  ngOnInit() {
  }

  getToken(){
    let params = new HttpParams();
    params = params.append('accessKeyId', 'a73fb35eb67647509baadccbbd8f466f');
    params = params.append('secretKey-2', '$Z<;8[ny!4hBM8::"-2');

    console.log(this.http.get("https://sandbox.conpay.com.br/v2/auth/token", { params }))
  }

}

