import { UserService } from './../user.service';
import { User } from './../user';
import { FormControl, Validator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  addUserForm: FormGroup
  constructor(private formbuilder: FormBuilder,
    private userService: UserService,
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
      )

    }
    this.addUserForm = this.formbuilder.group(formControls)

  }
  get firstName() {
    return this.addUserForm.get('firstName')
  }
  get lastName() {
    return this.addUserForm.get('lastName')
  }
  get phone() {
    return this.addUserForm.get('phone')
  }

  get email() {
    return this.addUserForm.get('email')
  }
  ngOnInit(): void {
  }
  addUser() {
    let data = this.addUserForm.value;
    let user = new User(data.firstName, data.lastName, data.phone,data.email,null)
     this.userService.addUser(user).subscribe(
       res => {
         console.log('data',res);
         
        this.router.navigate(['/peoplelist'])
         
      
     },
     err=>{
       console.log(err);
       
     }
     
     )


  }

}
