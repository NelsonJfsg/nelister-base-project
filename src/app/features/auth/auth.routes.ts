import { Routes } from "@angular/router";
import { LoginPage } from "./pages/login-page/login-page";

export const AuthRoutes : Routes = [
  {
    path : 'login',
    component : LoginPage,
  },
  {
    path : '**',
    redirectTo : 'login'
  }
];