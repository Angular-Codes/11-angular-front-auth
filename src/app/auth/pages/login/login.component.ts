import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup = this.fb.group({
    email   : [ 'kevin@gmail.com', [ Validators.email, Validators.required ] ],
    password: [ '123456', [ Validators.required, Validators.minLength(6) ] ]
  })

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  login() {
    const { email, password } = this.formLogin.value
    this.authService.login( email, password )
        .subscribe( ok =>  {

          if( ok === true ) {
            this.router.navigateByUrl('/dashboard')
          } else {
            Swal.fire("Error", ok, 'error')
          }
        })
  }

}
