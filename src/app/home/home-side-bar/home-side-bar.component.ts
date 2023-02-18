import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
//import { MatDrawer } from "@angular/material/sidenav";
import { Router } from "@angular/router";
//import { HomeComponent } from "../home.component";

@Component({
  selector: 'app-home-side-bar',
  templateUrl: './home-side-bar.component.html',
  styleUrls: ['./home-side-bar.component.scss']
})
export class HomeSideBarComponent {

  @Input()
  public hideToggle: boolean = false;

  @Input()
  public collapsed: boolean = false;

  constructor(private router: Router) { }

  public collapse() {
    this.collapsed = !this.collapsed;
    localStorage.setItem("Colapsado", this.collapsed ? "Si" : "No");
  }


}
