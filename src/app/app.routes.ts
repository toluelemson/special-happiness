import { Routes } from '@angular/router';
import { PagingComponent } from './paging-component/paging-component.component';
import {CreditCardInputComponent} from './credit-card-input/credit-card-input.component';
import {PasswordComponent} from './password/password.component';
import {StandingOrderOverviewComponent} from './standing-order-overview/standing-order-overview.component';

export const routes: Routes = [
  { path: '', redirectTo: 'paging/1', pathMatch: 'full' },
  { path: 'paging/:page', component: PagingComponent },
  { path: 'credit-card-input', component: CreditCardInputComponent },
  { path: 'password', component: PasswordComponent },
  { path: 'standing-order-overview', component: StandingOrderOverviewComponent },
];
