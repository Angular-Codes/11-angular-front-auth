import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup = this.fb.group({
    email   : [ '', [ Validators.email, Validators.required ] ],
    password: [ '', [ Validators.required, Validators.minLength(6) ] ]
  })

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

}
