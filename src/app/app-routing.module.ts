import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ClerkDashboardComponent } from './clerk-dashboard/clerk-dashboard.component';
import { PoDashboardComponent } from './po-dashboard/po-dashboard.component';
// import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { DataInputComponent } from './data-input/data-input.component';
import { PoSideNavComponent } from './po-side-nav/po-side-nav.component';
import { ReportPageComponent } from './report-page/report-page.component';
import { PoReportPageComponent } from './po-report-page/po-report-page.component';
import { PiChartComponent } from './pi-chart/pi-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';

const routes: Routes = [
  { path: '', redirectTo: '/signup', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'clerk-dashboard', component: ClerkDashboardComponent },
  { path: 'po-dashboard', component: PoDashboardComponent },
  // { path: 'header', component: HeaderComponent },
  { path: 'side-nav', component: SideNavComponent },
  { path: 'data-input', component: DataInputComponent },
  { path: 'po-side-nav', component:  PoSideNavComponent},
  { path: 'report-page', component:  ReportPageComponent},
  { path: 'po-report-page', component:  PoReportPageComponent},
  {path: 'pi-chart', component: PiChartComponent},
  {path: 'barchart', component: BarChartComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
