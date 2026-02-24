import { Routes } from "@angular/router";
import { DashboardPage } from "./pages/dashboard-page/dashboard-page";

export const DashboardRoutes : Routes = [
  {
    path : '',
    component : DashboardPage,
    data : {title : 'Dashboard'}

  }
];