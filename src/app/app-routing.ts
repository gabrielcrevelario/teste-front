
import { Routes, RouterModule } from '@angular/router';
import { TransactionsComponent } from './transactions/transactions.component';
import { HistoryComponent } from './history/history.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';

const APP_ROUTES: Routes = [
  {path:'', component:TransactionsComponent},
  {path:'history', component:HistoryComponent},
  {path:'benefits', component:BenefitsComponent}
];

export const routing:ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);