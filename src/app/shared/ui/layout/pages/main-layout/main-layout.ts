import { Component, signal } from '@angular/core';
import { Sidebar } from '../../components/sidebar/sidebar';
import { Navbar } from "../../components/navbar/navbar";
import { RouterOutlet } from '@angular/router';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'ui-main-layout',
  imports: [
    Sidebar,
    Navbar,
    Footer,
    RouterOutlet
],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout { 

  public isSidebarCollapsed  = signal(true);
}
