import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { NavbarService } from '../../../../shared/ui/layout/services/navbar.service';

@Component({
  selector: 'auth-login-page',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {

  private router = inject(Router);
  public navbarService = inject(NavbarService);

  public login() : void {
    localStorage.setItem('token', '1234567890abcdef');
    this.router.navigate(['/home']);
  }

  public onHandleTheme() {
    this.navbarService.setThemeToLocalStorage(() => {
      if (this.navbarService.getTheme) {
        document.documentElement.setAttribute('data-theme', 'dark');
      }else{
        document.documentElement.setAttribute('data-theme', 'light');
      }
    });
  }

}
