import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/serguridad.service';
import { NotifyService } from '../services/notify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  txtButon = 'Log In';
  txtUsuario = 'admin';
  txtPassword = 'P@$$w0rd';

  constructor(public login: LoginService, private nsrv: NotifyService, private router: Router) { }

  ngOnInit() {
    this.cambiaTexto();
  }

  logInOut() {
    if (this.login.isAutenticated) {
      this.login.logout();
      this.cambiaTexto();
    } else {
      this.login.login(this.txtUsuario, this.txtPassword).subscribe(
        data => {
          if (data) {
            this.cambiaTexto();
          } else {
            this.nsrv.add('Usuario o contraseña invalida.');
          }
        },
        err => { this.nsrv.add(err.message); }
      );
    }
  }

  registrar() {
    this.router.navigateByUrl('/registro');
  }

  private cambiaTexto() {
    this.txtButon = this.login.isAutenticated ? 'Log Out' : 'Log In';
  }
}
