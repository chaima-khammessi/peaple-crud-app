import { ToastrService } from 'ngx-toastr';
import { UserService } from './../../user.service';
import { User } from './../../user';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  constructor(private formbuilder: FormBuilder,
    private userService: UserService,
    private toastr: ToastrService,
    private router: Router
  ) {
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
    let  isLoggedIn=this.userService.isLoggedIn();
    if(isLoggedIn){
      this.router.navigate(['/peoplelist'])
    }
  }
  login() {
    let data = this.loginForm.value;
    let user = new User(null, null, null, data.email, data.password);
    this.userService.loginAdmin(user).subscribe(
      res => {
        let token = res.token;
        localStorage.setItem('myToken', token)
        this.toastr.success(res.message , "Admin Connected Successfuly");
        this.router.navigate(['/peoplelist'])


      }
    )



  }
}
