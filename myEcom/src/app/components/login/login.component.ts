import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginUserData = {
    email: "",
    password: "",
    fname: "",
    lname:""
  };
  constructor(private _auth: AuthService, private _router: Router) {}

  ngOnInit() {}
  loginUser() {
    this._auth.loginUser(this.loginUserData).subscribe(
      (res) => {
        console.log(res);
        console.log(JSON.stringify(res.payload));
        localStorage.setItem("token",JSON.stringify(res.payload));

        this._router.navigate(["/homepage"]);
      },
      (err) => console.log(err)
    );
  }
}
