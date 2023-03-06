import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
  ) { }


  ngOnInit(): void {
  }

  register() {
    console.log(this.formRegister.value);
    this.router.navigateByUrl('/dashboard')
  }

}
