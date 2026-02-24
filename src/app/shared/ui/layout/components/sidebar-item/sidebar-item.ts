import { Component, inject, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NavItem } from '../../interfaces/nav-item.interface';
import { Router } from '@angular/router';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'ui-sidebar-item',
  imports: [
    MatIconModule
],
  templateUrl: './sidebar-item.html',
  styleUrl: './sidebar-item.css',
})
export class SidebarItem { 

  private router = inject(Router);
  private navbarService = inject(NavbarService);

  @Input() isCollapsed : any;

  @Input() navItem : NavItem = {
    id : 0,
    title : '',
    iconName : '',
    routeLink : ''
  };

  public onHandleNavigation () : void {
    
    if (this.navItem.action) {
      this.navItem.action();
    }

    this.router.navigate([this.navItem.routeLink]);
  }

}
