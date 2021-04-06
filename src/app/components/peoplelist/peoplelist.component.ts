import { ToastrService } from 'ngx-toastr';
import { UserService } from './../../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peoplelist',
  templateUrl: './peoplelist.component.html',
  styleUrls: ['./peoplelist.component.css']
})
export class PeoplelistComponent implements OnInit {
  peopleList = [];


  constructor(private userServise: UserService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.userServise.getAllUsers().subscribe(
      result => {
        this.peopleList = result;
      },
      err => {
        console.log(err);

      }
    )
  }

  deleteUser(person) {
    let index = this.peopleList.indexOf(person);
    this.peopleList.splice(index, 1)
    this.userServise.deleteUser(person._id).subscribe(
      res => {
        this.toastr.error(res.message);
      },
      err => {
        console.log(err);

      }

    )


  }

}
