import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MyNavbarComponent } from './components/my-navbar/my-navbar.component';

@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    RegisterComponent,
    HomepageComponent,
    MyNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
