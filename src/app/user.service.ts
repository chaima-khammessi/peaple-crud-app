import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private getAllUserUrl = 'https://backend-people-crud-app.herokuapp.com/users'
  private deletUserUrl = 'https://backend-people-crud-app.herokuapp.com/users/'
  private addUserUrl = 'https://backend-people-crud-app.herokuapp.com/users/add'

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get<any>(this.getAllUserUrl);
  }
  deleteUser(id:string){
    return this.http.delete<any>(this.deletUserUrl + id)
  }
  addUser(user:User){
    return this.http.post<any>(this.addUserUrl, user )
  }
}
