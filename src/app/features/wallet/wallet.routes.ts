import { Routes } from "@angular/router";
import { WalletPage } from "./pages/wallet-page/wallet-page";

export const WalletRoutes : Routes = [
  {
    path : '',
    component : WalletPage,
    data : {title : 'Wallet'}
  }
];