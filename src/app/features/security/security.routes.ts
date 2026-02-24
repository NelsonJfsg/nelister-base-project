import { Routes } from "@angular/router";
import { SecurityPage } from "./pages/security-page/security-page";

export const SecurityRoutes : Routes = [
  {
    path : '',
    component : SecurityPage,
    data : {title : 'Security'}
  }
];