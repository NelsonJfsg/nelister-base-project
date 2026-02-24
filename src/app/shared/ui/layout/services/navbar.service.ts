import { inject, Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  protected navbarTitle : string = '';
  protected isDarkTheme : boolean = false;
  
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  constructor() { 
    this.getTitleFromRouteData();
  }

  private getTitleFromRouteData() : void {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          let route = this.route.root;
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route.snapshot.data['title'] || '';
        })
      )
      .subscribe(title => {
        this.navbarTitle = title;
      });
  }

  public setTitle (title : string) : void {
    this.navbarTitle = title;
  }

  public get getTitle () : string {
    return this.navbarTitle;
  }
  
  public setTheme (isDark : boolean) : void {
    this.isDarkTheme = isDark;
  }

  public get getTheme () : boolean {
    return this.isDarkTheme;
  }
}
