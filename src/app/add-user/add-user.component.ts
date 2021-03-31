import { FormControl, Validator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
 addUserForm : FormGroup
  constructor( private formbuilder:FormBuilder) {
let formControls={
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
this.addUserForm=this.formbuilder.group(formControls)

}
get firstName() {
  return this.addUserForm.get('firstName')
}
get lastName(){
  return this.addUserForm.get('lastName')
}
get phone(){
  return this.addUserForm.get('phone')
}

get email(){
  return this.addUserForm.get('email')
}
  ngOnInit(): void {
  }
  addUser(){
    console.log(this.addUserForm.value);
    
  }

}
