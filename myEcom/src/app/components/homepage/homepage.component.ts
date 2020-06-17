import { Component, OnInit } from "@angular/core";

import { UserServiceService } from "../../services/userService.service";
import { Subscription } from "rxjs/Subscription";
import { User } from 'src/app/user';

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.scss"],
  inputs: ['user'],
  providers: [UserServiceService],
})

export class HomepageComponent implements OnInit {
  user= {
    id: String,
    email: String,
    password: String,
    fname: String,
    lname: String,
  };
  userSub: Subscription;
  userfirstName = "";
  constructor(private userService: UserServiceService) {}

  ngOnInit() {
     let x = this.userService.getOneUser()
    .subscribe(loggedUser => {

      this.user = loggedUser;
    });
    console.log()
  }
}
