import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent {
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


}
