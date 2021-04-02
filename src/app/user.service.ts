import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private getAllUserUrl = 'https://backend-people-crud-app.herokuapp.com/users'
  private deletUserUrl = 'https://backend-people-crud-app.herokuapp.com/users/'
  private getOneUserUrl = 'https://backend-people-crud-app.herokuapp.com/users/'
  private addUserUrl = 'https://backend-people-crud-app.herokuapp.com/users/add'
  private updateUserUrl ='https://backend-people-crud-app.herokuapp.com/users/update'

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get<any>(this.getAllUserUrl);
  }
  deleteUser(id:string){
    return this.http.delete<any>(this.deletUserUrl + id)
  }
  getOneUser(id:string){
    return this.http.get<any>(this.getOneUserUrl  +id)
  }
  addUser(user:User){
    return this.http.post<any>(this.addUserUrl, user )
  }
  updateUser(user:User){
    return this.http.put<any>(this.updateUserUrl, user )

  }
}
