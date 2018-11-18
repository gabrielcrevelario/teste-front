import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvoiceCreateComponent } from './invoice-create/invoice-create.component';
import { InvoiceAddComponent } from './invoice-add/invoice-add.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { HistoryComponent } from './history/history.component';
import { UserListComponent } from './user-list/user-list.component';
import { SearchComponent } from './search/search.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { routing } from './app-routing';
import { NgxCurrencyModule } from "ngx-currency";
@NgModule({
  declarations: [
    AppComponent,
    InvoiceCreateComponent,
    InvoiceAddComponent,
    TransactionsComponent,
    BenefitsComponent,
    HistoryComponent,
    UserListComponent,
    SearchComponent,
    DashboardComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    routing,
    NgxCurrencyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
