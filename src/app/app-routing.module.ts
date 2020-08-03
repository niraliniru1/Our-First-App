import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PayComponent } from './pay/pay.component';
import { CreditComponent } from './credit/credit.component';
import { ReceiptComponent } from './receipt/receipt.component';

const routes: Routes = [
  {
    path: 'pay',
    component: PayComponent,
  },
  {
    path: 'credit',
    component: CreditComponent,
  },
  {
    path: 'receipt',
    component: ReceiptComponent,
  },
  {
    path: '**',
    redirectTo: '/pay',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
