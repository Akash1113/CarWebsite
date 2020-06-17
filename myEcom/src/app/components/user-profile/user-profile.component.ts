import { Component, OnInit, EventEmitter } from '@angular/core';
import { UserServiceService } from 'src/app/services/userService.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  providers:[UserServiceService]
})
export class UserProfileComponent implements OnInit {

  user= {
    email: String,
    password: String,
    fname: String,
    lname: String
  };

  constructor(private _userService: UserServiceService) { }


  onUpdateUser(user: any){
   this._userService.editUser(user)
    .subscribe(resEditUser => user = resEditUser);
    console.log(this.user)
  }
  ngOnInit() {
   this._userService.getOneUser()
      .subscribe(resCarData => this.user = resCarData);
  }


}
