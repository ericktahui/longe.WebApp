import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Route } from '@angular/router';

import { AuthenticationCustomService } from 'src/app/services/auth.service';
import { UserService } from '../services/usr.service';




//@Injectable({ providedIn: 'root' })
@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private usrService: UserService,
        private router: Router,
        private authenticationService: AuthenticationCustomService
    ) {}



    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let currentUserSigned = this.usrService.isUserSignedIn();

        console.log('canActivate-> currentUserSigned:'+currentUserSigned);

        if (currentUserSigned) {
            // authorised so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }

    canActivate_old(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {
            // authorised so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}