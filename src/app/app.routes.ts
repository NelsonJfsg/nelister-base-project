import { Routes } from '@angular/router';
import { MainLayout } from './shared/ui/layout/pages/main-layout/main-layout';
import { AuthGuard } from './core/guards/AuthGuard-guard';
import { NoAuthGuard } from './core/guards/NoAuthGuard-guard';

export const routes: Routes = [
  {
    path : 'auth',
    canActivate : [NoAuthGuard],
    loadChildren : () => import('./features/auth/auth.routes').then(r => r.AuthRoutes)
  },
  {
    path : '',
    component : MainLayout,
    canActivate : [AuthGuard],
    children : [
      {
        path : 'home',
        loadChildren : () => import('./features/home/home.routes')
        .then(r => r.HomeRoutes)
      },
      {
        path : 'dashboard',
        loadChildren : () => import('./features/dashboard/dashboard.routes')
        .then(r => r.DashboardRoutes)
      },
      {
        path : 'security',
        loadChildren : () => import('./features/security/security.routes')
        .then(r => r.SecurityRoutes)
      },
      {
        path : 'wallet',
        loadChildren : () => import('./features/wallet/wallet.routes')
        .then(r => r.WalletRoutes)
      },
      {
        path : 'settings',
        loadChildren : () => import('./features/settings/settings.routes')
        .then(r => r.SettingsRoutes)
      },
      {
        path : '**',
        redirectTo : 'home'
      }
    ]
  },
  {
    path : '**',
    redirectTo : 'auth'
  }
  
];
