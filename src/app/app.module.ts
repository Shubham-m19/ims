import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ClerkDashboardComponent } from './clerk-dashboard/clerk-dashboard.component';
import { PoDashboardComponent } from './po-dashboard/po-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DataInputComponent } from './data-input/data-input.component';
import { PoSideNavComponent } from './po-side-nav/po-side-nav.component';
import { ReportPageComponent } from './report-page/report-page.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PoReportPageComponent } from './po-report-page/po-report-page.component';
import { CommonModule } from '@angular/common';
import { ExpenseReportComponent } from './expense-report/expense-report.component';
import { FooterComponent } from './footer/footer.component';
import { PiChartComponent } from './pi-chart/pi-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BarChartComponent } from './bar-chart/bar-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ClerkDashboardComponent,
    PoDashboardComponent,
    SideNavComponent,
    HeaderComponent,
    DataInputComponent,
    PoSideNavComponent,
    ReportPageComponent,
    PoReportPageComponent,
    ExpenseReportComponent,
    FooterComponent,
    PiChartComponent,
    BarChartComponent // This belongs in declarations

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    NgxChartsModule // Library module should only be in imports


  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
