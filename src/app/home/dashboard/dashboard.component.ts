import { Component, Injectable, OnInit } from '@angular/core';
import { DashboardItem } from "../../interfaces/dashboard.item.type";
import { DashboardService } from "../../services/dashboard.service";
import { ToastService } from "../../services/toast.service";
import { GetDataService } from 'src/app/services/get-data.service';
import { Route, Router } from '@angular/router';
import { NationalDailyData } from 'src/app/interfaces/nationalDailyData.type';
import { MatDialog } from '@angular/material/dialog';
import { SummaryCountries } from 'src/app/interfaces/summaryCountries.interface';
import { MyListFavoritesComponent } from './my-list-favorites/my-list-favorites.component';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

@Injectable({
  providedIn: "root",
})

export class DashboardComponent {

  public datos!: NationalDailyData;
  public collapsed = false;
  public elements: DashboardItem[] = [];
  public loading = false;
  public ngxLoadingAnimationTypes = {
    chasingDots: "chasing-dots",
    circle: "sk-circle",
    circleSwish: "circleSwish",
    cubeGrid: "sk-cube-grid",
    doubleBounce: "double-bounce",
    none: "none",
    pulse: "pulse",
    rectangleBounce: "rectangle-bounce",
    rotatingPlane: "rotating-plane",
    threeBounce: "three-bounce",
    wanderingCubes: "wandering-cubes",
  };

  constructor(
    private dashboardService: DashboardService,
    private toast: ToastService,
    private get : GetDataService,
    private router: Router,


  ) {}


  public ngOnInit() {
    //this.getData().then();
/*     this.get.getNationalDailyData("2021-01-02").subscribe(data=>{
      this.datos= data;
      console.log(data, 'es dataaa');
    }) */
//   this.get.getTodaySummaryCountries().subscribe(data=>{
//   console.log(data, 'es dataaa');
// })

  }

  /**
   * getMetrics
   */
  public async getData() {
    try {
      this.loading = true;
     // this.elements = await this.dashboardService.getNewDashboardData();
      this.loading = false;
    } catch (e) {
      console.log(e);
     /*  this.toast.error(
        "No se pudieron obtener los indicadores del dashboard, revise su conexión"
      ); */
    }
  }


}






