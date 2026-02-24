import { NgClass } from '@angular/common';
import { Component, Input, signal, WritableSignal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SidebarItem } from '../sidebar-item/sidebar-item';
import { NavItem } from '../../interfaces/nav-item.interface';

@Component({
  selector: 'ui-sidebar',
  imports: [
    MatIconModule,
    MatButtonModule,
    NgClass,
    SidebarItem
],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar { 

  public navItems : NavItem[] = [
    {
      id : 0,
      title : 'Home',
      iconName : 'home',
      routeLink : 'home'
    },
    {
      id : 1,
      title : 'Dashboard',
      iconName : 'dashboard',
      routeLink : 'dashboard'
    },
    {
      id : 2,
      title : 'Security',
      iconName : 'security',
      routeLink : 'security'
    },
    {
      id : 3,
      title : 'Wallet',
      iconName : 'wallet',
      routeLink : 'wallet'
    }
  ];

  public navFootersItems : NavItem[] = [
    {
      id : 4,
      title : 'Logout',
      iconName : 'logout',
      routeLink : 'auth',
      action : () => {
        localStorage.removeItem('token');
      }
    },
    {
      id : 5,
      title : 'Settings',
      iconName : 'settings',
      routeLink : 'settings'
    }
  ];


  @Input() collapsedSignal !: WritableSignal<boolean>;

  public onHandleCollapse () : void {
    this.collapsedSignal.update(v => !v)
  }
  
}
