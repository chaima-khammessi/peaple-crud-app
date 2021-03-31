import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  myForm: FormGroup

  constructor(private formBuilder: FormBuilder) {
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
    this.myForm = formBuilder.group(formControls);
  }
  get firstName() {
    return this.myForm.get('firstName')
  }
  get lastName() {
    return this.myForm.get('lastName')
  }
  get phone() {
    return this.myForm.get('phone')
  }
  get email() {
    return this.myForm.get('email')
  }

  ngOnInit(): void {

  }
  saveUser() {
    console.log(this.myForm.value);

  }


}
