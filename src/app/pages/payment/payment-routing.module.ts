import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentPage } from './payment.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentPage
  },
  {
    path: 'wallet',
    loadChildren: () => import('./wallet/wallet.module').then( m => m.WalletPageModule)
  },
  {
    path: 'netbanking',
    loadChildren: () => import('./netbanking/netbanking.module').then( m => m.NetbankingPageModule)
  },
  {
    path: 'upi-collect',
    loadChildren: () => import('./upi-collect/upi-collect.module').then( m => m.UpiCollectPageModule)
  },
  {
    path: 'upi-intent',
    loadChildren: () => import('./upi-intent/upi-intent.module').then( m => m.UpiIntentPageModule)
  },
  {
    path: 'upi-push',
    loadChildren: () => import('./upi-push/upi-push.module').then( m => m.UpiPushPageModule)
  },
  {
    path: 'new-card',
    loadChildren: () => import('./new-card/new-card.module').then( m => m.NewCardPageModule)
  },
  {
    path: 'save-card',
    loadChildren: () => import('./save-card/save-card.module').then( m => m.SaveCardPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentPageRoutingModule {}
