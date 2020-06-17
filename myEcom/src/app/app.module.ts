import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule} from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MyNavbarComponent } from './components/my-navbar/my-navbar.component';
import { CarCardComponent } from './components/car-card/car-card.component';
import { HttpModule } from '@angular/http';
import { AddCarComponent } from './components/add-car/add-car.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';


@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    RegisterComponent,
    HomepageComponent,
    MyNavbarComponent,
    CarCardComponent,
    AddCarComponent,
    UserProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
