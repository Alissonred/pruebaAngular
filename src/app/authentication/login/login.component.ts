import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastService } from "src/app/services/toast.service";
import { AuthService } from "../../services/auth.service";
import { LoadingService } from "../../services/loading.service";
import { User_login } from 'src/app/interfaces/login.interface';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public title: string = "Iniciar Session";
  public loginForm = new FormGroup({
    user: new FormControl('', Validators.required),
    password : new FormControl('', Validators.required),

  })


  public isLoggedIn: boolean = false;
  public error: string = "";
  public form!: FormGroup;
  public formRecovery!: FormGroup;
  public action: string = "Iniciar Sesión";
  public loginInProgress = false;
  public rememberUser = false;
  public occupied = false;
  public recoverInProgress = false;
  public passRecover = false;
  public showPassword = false;
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
    private router: Router,
    private fb: FormBuilder,
    private toastService: ToastService,
    private loadingService: LoadingService,
    private authService: AuthService
  ) {
  }

  public async ngOnInit() {
    //this.controlsCreate();
  }
  public ChangePassMode() {
    this.showPassword = !this.showPassword;
  }


  onLogin(form: any){
    const copyForm = {...form}
    if(copyForm.user== this.authService.pseudoUser.user && copyForm.password == this.authService.pseudoUser.password ){
      localStorage.setItem("pseudoToken","everythinkIsOkYouCanContinue")
      localStorage.setItem("userName","copyForm.user")
      this.router.navigate(['home']);
    }else{
      console.log('Incorrect data');

    }

    // this.authService.loginByEmail(form).subscribe({
    //   next:(val:any)=>{
    //     this.router.navigate(['home']);
    //   },
    //   error:(err:any)=>{
    //     console.log(err);
    //   }
    // })
   console.log(form);

  }
  public async login() {'.....'}


}
