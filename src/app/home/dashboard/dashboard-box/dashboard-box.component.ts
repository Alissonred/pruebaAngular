import { Component, Input, OnInit } from "@angular/core";
import { DashboardItem } from "../../../interfaces/dashboard.item.type";
import { DashboardService } from "../../../services/dashboard.service";
import { DashboardComponent } from "../dashboard.component";

@Component({
  selector: 'app-dashboard-box',
  templateUrl: './dashboard-box.component.html',
  styleUrls: ['./dashboard-box.component.scss']
})
export class DashboardBoxComponent implements OnInit {
  public expanded = false;
  @Input() public data!: DashboardItem[];
  @Input() public mainRef!: DashboardComponent;
  public fixedData!: DashboardItem;


  constructor(
    private dashboardService: DashboardService) {
    this.fixedData = this.dashboardService.getNewDashboardData()[0];
  }

  public ngOnInit(): void {
  }

  /**
   * changePanel
   */
  public changePanel() {
    this.expanded = !this.expanded;
  }
}
