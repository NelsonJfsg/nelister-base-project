import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable({ providedIn: 'root' })
export class NoAuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const loggedIn = localStorage.getItem('token') !== null;
    if (loggedIn) {
      this.router.navigate(['/home']);
      return false;
    }
    return true;
  }
}