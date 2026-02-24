import { Component, inject, Input, WritableSignal } from '@angular/core';
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

  @Input() isCollapsed !: WritableSignal<boolean>;

  private isMobile () : boolean {
    return window.innerWidth <= 768;
  }
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

    if (this.isMobile()) {
      this.isCollapsed.update(() => true);
    }

    this.router.navigate([this.navItem.routeLink]);
  }

}
