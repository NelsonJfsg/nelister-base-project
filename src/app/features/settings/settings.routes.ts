import { Routes } from "@angular/router";
import { SettingsPage } from "./pages/settings-page/settings-page";

export const SettingsRoutes : Routes = [
  {
    path : '',
    component : SettingsPage,
    data : {title : 'Settings'}
  }
];