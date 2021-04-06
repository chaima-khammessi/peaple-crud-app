import { FormGroup } from '@angular/forms';
import { UserService } from './../user.service';
import { User } from './../user';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent implements OnInit {
  person:any;
  user:any;
  constructor(private activeRoute:ActivatedRoute,
              private userService:UserService
    ) { }

  ngOnInit(): void {
    let id= this.activeRoute.snapshot.params.id;
    this.userService.getOneUser(id).subscribe(
      res=>{
        this.user = res;
       
        console.log(this.user);
        
        
      },
      err=>{
        console.log(err);
        
      }
    )
  }

}
