import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { MyListFavoritesComponent } from './my-list-favorites/my-list-favorites.component';
import { ShowCounutriesComponent } from './show-counutries/show-counutries.component';

const routes: Routes = [
  { path: '',
  component: DashboardComponent,
  children: [
    { path: 'show-countries', component: ShowCounutriesComponent},
    { path: 'list-favorites', component: MyListFavoritesComponent},
    {
      path: "**",
      redirectTo: "dashboard",
      pathMatch: "full"
    }
  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
