import { Component, OnInit } from '@angular/core';
import { Security } from 'src/app/utils/security.util';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { Cart } from 'src/app/models/cart.model';
import { CartUtil } from 'src/app/utils/cart.util';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
    public user!: User;
    public cart: Cart = new Cart();

    constructor(private router: Router) { }

    ngOnInit() {
        this.user = Security.getUser();
    }

    logout() {
        Security.clear();
        this.router.navigate(['/login']);
    }

    public totalItems() {
        const total = localStorage.getItem('petshopcart')
        return total
      }

}
