import { Component, inject, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'ui-navbar',
  imports: [
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  @Input() collapsedSignal: any;

  public navbarService = inject(NavbarService);

  public onHandleCollapse() {
    this.collapsedSignal.update((v: any) => !v);
  }

  public onHandleTheme() {

    this.navbarService.setTheme(!this.navbarService.getTheme);
    
    if (this.navbarService.getTheme) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }
}
