import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from "./component/footer/footer.component";
import { ClientListComponent } from './pages/client/client-list/client-list.component';
import { PaginatorComponent } from './component/paginator/paginator.component';
import { ClientFormComponent } from './pages/client/client-form/client-form.component';
import { ClientModalComponent } from './pages/client/client-modal/client-modal.component';
import { ClientInfoComponent } from './pages/client/client-info/client-info.component';
import { CurrencyMexPipePipe } from './pipe/currency-mex-pipe.pipe';
import { InvoiceInfoComponent } from './pages/invoice/invoice-info/invoice-info.component';
import { InvoiceFormComponent } from './pages/invoice/invoice-form/invoice-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home/home.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'client-list', component: ClientListComponent},
    {path: 'client-list/page/:page', component: ClientListComponent},
    {path: 'client-form', component: ClientFormComponent},
    {path: 'client-form/:id', component: ClientFormComponent},
    {path: 'client-info/:id', component: ClientInfoComponent},
    {path: 'invoice-info/:idInvoice', component: InvoiceInfoComponent},
    {path: 'invoice-form/:idClient', component: InvoiceFormComponent},
]

@NgModule({
    declarations: [
          AppComponent,
          HeaderComponent,
          FooterComponent,
          ClientListComponent,
          PaginatorComponent,
          ClientFormComponent,
          ClientModalComponent,
          ClientInfoComponent,
          CurrencyMexPipePipe,
          InvoiceInfoComponent,
          InvoiceFormComponent,
          HomeComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(routes),
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatAutocompleteModule,
        MatInputModule,
        MatFormFieldModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
