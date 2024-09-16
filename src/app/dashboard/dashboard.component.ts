import { Component } from '@angular/core';
import { AlertComponent } from "../alert/alert.component";
import { SmoothedLineChartComponent } from "../smoothed-line-chart/smoothed-line-chart.component";
import { OrganisationStatsComponent } from "../organisation-stats/organisation-stats.component";
import { TodaysLogComponent } from "../todays-log/todays-log.component";
import { HomeDashboardHeaderComponent } from "../home-dashboard-header/home-dashboard-header.component";
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [AlertComponent, SmoothedLineChartComponent, OrganisationStatsComponent, TodaysLogComponent, HomeDashboardHeaderComponent, SidebarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
