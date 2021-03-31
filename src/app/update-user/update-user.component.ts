import { FormGroup , Validators , FormBuilder , FormControl} from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  updateUserForm : FormGroup
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
this.updateUserForm=this.formbuilder.group(formControls)

}
get firstName() {
  return this.updateUserForm.get('firstName')
}
get lastName(){
  return this.updateUserForm.get('lastName')
}
get phone(){
  return this.updateUserForm.get('phone')
}

get email(){
  return this.updateUserForm.get('email')
}
  ngOnInit(): void {
  }
  updateUser(){
    console.log(this.updateUserForm.value);
    
  }
}
