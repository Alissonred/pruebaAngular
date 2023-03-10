import { Component,OnInit, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDrawer } from "@angular/material/sidenav";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { ToastService } from "../services/toast.service";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public menusList = [];
  public configSelected = null;
  public profileSelected = null;
  public hideToggle: boolean = true;
  public collapsed = false;
  public userRole: string = "Usuario";
 /*  public enableEdition: boolean;

  @ViewChild("drawer")
  public drawer: MatDrawer; */

  constructor(
    public authService: AuthService,
    private toast: ToastService,
    private router: Router,

  ) {
  }

  public async ngOnInit() {
    this.initSidebar();
  }
  public initSidebar(){
   //this.menusList.push({icono: "Dashboard@PYP.png", nombre: "Dashboard", ruta: '/home/dashboard'});
  }
  public userName = localStorage.getItem("userName")
  public async logout() {
    if(confirm('Do you want to log out?')){
      localStorage.removeItem("pseudoToken")
      this.router.navigate(['login']);
    }
   // this.toast.success("Sesión cerrada exitosamente");
   // this.router.navigateByUrl("/");
  }



}
