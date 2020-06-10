import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../services/userService.service';
import {AuthService} from '../../services/auth.service'
@Component({
  selector: 'app-my-navbar',
  templateUrl: './my-navbar.component.html',
  styleUrls: ['./my-navbar.component.scss'],
  providers: [UserServiceService]
})
export class MyNavbarComponent implements OnInit {
  logedUser: any
  user

  constructor(private _userService: UserServiceService,
    private _authService: AuthService) { }

  ngOnInit() {
    this._userService.getUsers()
    .subscribe(resUserData => this.user = resUserData)
  }
getUser(user: any){
  this.logedUser = user
  console.log(this.logedUser)
}
}

