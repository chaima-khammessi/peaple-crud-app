import { ToastrService } from 'ngx-toastr';
import { UserService } from './../../user.service';
import { User } from './../../user';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup
  constructor(private formbuilder: FormBuilder,
     private userService:UserService,
     private toastr:ToastrService,
     private router:Router
      ) {
    let formControls = {
      firstName: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z '-]+"),
        Validators.minLength(2)
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z '-]+"),
        Validators.minLength(2)]),
      phone: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern("[0-9]+"),
        Validators.maxLength(8),

      ]
      ),
      email: new FormControl('',
        [
          Validators.required,
          Validators.email,

        ]
      ),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]
      ),
      repassword: new FormControl('', [
        Validators.required,
      ]
      ),
    }
    this.registerForm = this.formbuilder.group(formControls)

  }
  get firstName() {
    return this.registerForm.get('firstName')
  }
  get lastName() {
    return this.registerForm.get('lastName')
  }
  get phone() {
    return this.registerForm.get('phone')
  }

  get email() {
    return this.registerForm.get('email')
  }
  get password(){
    return this.registerForm.get('password')
  }
  get repassword(){
    return this.registerForm.get('repassword')
  }
  ngOnInit(): void {
    let  isLoggedIn=this.userService.isLoggedIn();
    if(isLoggedIn){
      this.router.navigate(['/peoplelist'])
    }
  }
  register() {
   let data = this.registerForm.value;
   let user = new User(data.firstName, data.lastName, data.phone, data.email, data.password)
   this.userService.registerAdmin(user).subscribe(
     res=>{
      this.toastr.success(res.message);
      this.router.navigate(['/login'])

     },
     err=>{
       console.log(err);
       
     }
   )
  }



}
