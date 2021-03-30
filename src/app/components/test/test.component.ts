import { UserService } from './../../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  name ="chaima"
  booksList=[];
  myCondition=false;
  usersList=[];

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      result =>{
        this.usersList=result;

      },
      err =>{
        console.log(err);
        
      }
    )
  }
  hello(myName:string){
    alert ('hello' + ' '+myName)
  }

}
