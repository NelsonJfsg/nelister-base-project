import { Routes } from "@angular/router";
import { HomePage } from "./pages/home-page/home-page";

export const HomeRoutes : Routes = [
  {
    path : '',
    component : HomePage,
    data : {title : 'Home'}
  }
];