import { UserService } from './../../user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn:boolean;

  constructor(private userService:UserService,
              private router:Router
    ) { }

  ngOnInit(): void {
    this.isLoggedIn=this.userService.isLoggedIn()
  }
  logout(){
    localStorage.removeItem('myToken');
    this.router.navigate(["/login"])
  }

}
