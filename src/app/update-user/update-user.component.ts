import { ToastrService } from 'ngx-toastr';
import { UserService } from './../user.service';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user'

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  updateUserForm: FormGroup
  constructor(private formbuilder: FormBuilder,
    private activateRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router,
    private toastr:ToastrService
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
    this.updateUserForm = this.formbuilder.group(formControls)

  }
  get firstName() {
    return this.updateUserForm.get('firstName')
  }
  get lastName() {
    return this.updateUserForm.get('lastName')
  }
  get phone() {
    return this.updateUserForm.get('phone')
  }

  get email() {
    return this.updateUserForm.get('email')
  }
  ngOnInit(): void {
    let idUser = this.activateRoute.snapshot.params.id;
    this.userService.getOneUser(idUser).subscribe(
      res => {
        let user = res;
        this.updateUserForm.patchValue({
          firstName: user.firstName,
          lastName: user.lastName,
          phone: user.phone,
          email: user.email
        })

      },
      err => {
        console.log(err);

      }
    )

  }
  updateUser() {
    let data = this.updateUserForm.value;
    let idUser = this.activateRoute.snapshot.params.id
    let user = new User(data.firstName, data.lastName, data.phone, data.email, null, idUser);
    this.userService.updateUser(user).subscribe(
      res => {
        this.router.navigate(['/peoplelist'])
        this.toastr.warning(res.message)
      },
      err => {
        console.log(err);

      }
    )

  }
}
