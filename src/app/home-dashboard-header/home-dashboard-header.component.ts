import { Component } from '@angular/core';
import { TodaysLogComponent } from "../todays-log/todays-log.component";

@Component({
  selector: 'app-home-dashboard-header',
  standalone: true,
  imports: [TodaysLogComponent],
  templateUrl: './home-dashboard-header.component.html',
  styleUrl: './home-dashboard-header.component.css'
})
export class HomeDashboardHeaderComponent {

}
