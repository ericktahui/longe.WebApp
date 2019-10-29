import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';



import {
  GoogleApiModule, 
  //GoogleApiService, 
  //GoogleAuthService, 
  NgGapiClientConfig, 
  NG_GAPI_CONFIG,

  //GoogleApiConfig
} from "ng-gapi";


// Features
import { MaterialModule } from 'src/features/material/material.module';
import { CustomModule } from '../features/custom/custom.module';
import { RainbowModule } from '../features/rainbow/rainbow.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


// Routes
import AppRoutes from './app.routes';
// Services
import { DatabaseService } from './services/db.service';
import { ConfigService } from './services/config.service';
import { ApiService } from './services/api.service';
import { CrudService } from './services/crud.service';
import { UserService } from './services/usr.service';
import { AuthenticationCustomService } from './services/auth.service';
import { AlertService } from './services/alert.service';


// Components
import { HomeComponent } from './views/home/home.component';
import { UsersComponent } from './views/users/users.component';
import { ErrorComponent } from './views/error/error.component';
import { AppComponent } from './app.component';
import { SearchComponent } from './views/search/search.component';
import { MiniSearchComponent } from './views/search/mini-search.component';
import { GeneradorComponent } from './views/generador/generador.component';
import { Genera2Component } from './views/genera2/genera2.component';
import { DinamicoComponent } from './views/dinamico/dinamico.component';
import { EstructuralComponent } from './views/estructural/estructural.component';
import { PropagacionDirective } from './views/estructural/propagacion/propagacion.directive';
import { ExamenComponent } from './views/examen/examen.component';
import { ColorDirective } from './views/examen/color.directive';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { AlertComponent } from './views/alert/alert.component';
import { GoogleLoginComponent } from './views/login/google.login.component';
import { RescuePassComponent } from './views/rescuePass/rescuePass.component';
import { UserComponent } from './views/user/user.component';
import { DataUserComponent } from './views/dataUser/data.user.component';
import { PhotoUserComponent } from './views/photoUser/photo.user.component';
import { SearchUserComponent } from './views/searchUser/search.user.component';
import { OrderComponent } from './views/order/order.component';
import { AdminComponent } from './views/admin/admin.component';
import { StatisticsComponent } from './views/statistics/statistics.component';
import { DespedidaComponent } from './views/despedida/despedida.component';
import { NgbdDatepickerPopup }from './views/datepicker/datepicker-popup';

//Guard para validacion de rutas
import { AuthGuard } from './_guards/auth.guard';
import { HttpService } from './services/http.service';

//Helpers
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { fakeBackendProvider } from './_helpers/fake-backend';
import { ChangePasswordComponent } from './views/rescuePass/changePassword.component';


// var gapiClientConfig: NgGapiClientConfig = {
//   client_id: "266766215203-shbcllsocb7me1jrkv44dkhd9tnpkqt7.apps.googleusercontent.com",
//   discoveryDocs: ["https://analyticsreporting.googleapis.com/$discovery/rest?version=v4"],
//   redirect_uri: "http://localhost:4200/examen",
//   ux_mode:"popup",
//   scope: [
//     "https://www.googleapis.com/auth/userinfo.email",
//     "https://www.googleapis.com/auth/userinfo.profile",
//     "https://www.googleapis.com/auth/analytics.readonly",
//     "https://www.googleapis.com/auth/analytics"
//     ].join(" ")
//   };

  var gapiClientConfig: NgGapiClientConfig = {
    client_id: "266766215203-shbcllsocb7me1jrkv44dkhd9tnpkqt7.apps.googleusercontent.com",
    discoveryDocs: ["https://analyticsreporting.googleapis.com/$discovery/rest?version=v4"],
    redirect_uri: "http://localhost:4200/user",
    ux_mode:"popup",
    scope: [
      "https://www.googleapis.com/auth/userinfo.email",
      "https://www.googleapis.com/auth/userinfo.profile"
       ].join(" ")
    };
  


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ErrorComponent,
    SearchComponent,
    MiniSearchComponent,
    GeneradorComponent,
    Genera2Component,
    DinamicoComponent,
    EstructuralComponent,
    PropagacionDirective,
    ExamenComponent,
    ColorDirective,
    LoginComponent,
    RegisterComponent,
    AlertComponent,
    GoogleLoginComponent,
    RescuePassComponent,
    UserComponent,
    DataUserComponent,
    PhotoUserComponent,
    SearchUserComponent,
    OrderComponent,
    AdminComponent,
    StatisticsComponent,
    DespedidaComponent,
    ChangePasswordComponent,
    RescuePassComponent,
    NgbdDatepickerPopup,
  ],
  imports: [
    BrowserModule,
    CustomModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RainbowModule,
    AppRoutes,
    MaterialModule,
    HttpClientModule,
    NgbModule,
    GoogleApiModule.forRoot({
      provide:NG_GAPI_CONFIG,
      useValue: gapiClientConfig
    }),


  ],
  providers: [DatabaseService, 
              ConfigService,
              ApiService,
              CrudService,
              UserService,
              AuthenticationCustomService,
              AlertService,
              AuthGuard,
              HttpService,
            {provide: HTTP_INTERCEPTORS,useClass: JwtInterceptor, multi:true},
            {provide: HTTP_INTERCEPTORS,useClass: ErrorInterceptor, multi:true},
            fakeBackendProvider,
            ],
  bootstrap: [AppComponent],
})
export class AppModule { }
