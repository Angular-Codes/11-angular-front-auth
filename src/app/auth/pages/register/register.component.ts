import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formRegister: FormGroup = this.fb.group({
    name    : [ '', [ Validators.required ] ],
    email   : [ '', [ Validators.email, Validators.required ] ],
    password: [ '', [ Validators.required, Validators.minLength(6) ] ]
  })

  constructor(
    private fb: FormBuilder
  ) { }


  ngOnInit(): void {
  }

}
