import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formRegister: FormGroup = this.fb.group({
    name    : [ 'kevin cuadros', [ Validators.required ] ],
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

  register() {
    const { name, email, password } = this.formRegister.value
    this.authService.register( name, email, password )
        .subscribe( ok =>  {
          if( ok === true ) {
            this.router.navigateByUrl('/dashboard')
          } else {
            Swal.fire("Error", ok, 'error')
          }
        })
  }

}
