import { User } from './../../user';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  constructor(private formbuilder: FormBuilder) {
    let formControls = {

      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]
      ),
      email: new FormControl('',
        [
          Validators.required,
          Validators.email,

        ]
      )

    }
    this.loginForm = this.formbuilder.group(formControls)

  }

  get password() {
    return this.loginForm.get('password')
  }

  get email() {
    return this.loginForm.get('email')
  }
  ngOnInit(): void {
  }
  login() {
   let data = this.loginForm.value;
   let user = new User(null, null ,null, data.email, data.password);
   console.log(user);
   

  }
}
