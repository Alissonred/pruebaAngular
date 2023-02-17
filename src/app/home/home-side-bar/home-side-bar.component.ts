import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
//import { MatDrawer } from "@angular/material/sidenav";
import { Router } from "@angular/router";
import { AddEditElementComponent } from '../crud/add-edit-element/add-edit-element.component';
import { HomeComponent } from "../home.component";

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

  @Input()
  public menusList: any[] = [];

 /*  @Input()
  public drawer: MatDrawer; */

  public selectedMenu = null;

  constructor(
    private router: Router,
    private _dialog : MatDialog
    ) { }

  public ngOnInit(): void {
  }

/*   public async gotoMenu(menu) {
    await this.router.navigateByUrl(menu.ruta);
    if (this.drawer) {
      this.drawer.close();
    }
  } */



  public collapse() {
    this.collapsed = !this.collapsed;
    localStorage.setItem("Colapsado", this.collapsed ? "Si" : "No");
  }

  openAddEditForm(){
    this._dialog.open(AddEditElementComponent)
  }
}
