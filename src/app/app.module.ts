import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PersonalInformationComponent } from './components/personal-information/personal-information.component';
import { FriendsGroupsComponent } from './components/friends-groups/friends-groups.component';
import { FooterComponent } from './components/footer/footer.component';
import {RouterModule} from "@angular/router";
import { HomePageComponent } from './home-page/home-page.component';
import { FriendPageComponent } from './friend-page/friend-page.component';
import { GroupPageComponent } from './group-page/group-page.component';
import { WallPageComponent } from './wall-page/wall-page.component';
import {FormsModule} from '@angular/forms';
import { SettingPageComponent } from './setting-page/setting-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MenuComponent } from './components/menu/menu.component';
import {AuthModule} from "./auth/auth.module";
import {AppRoutingModule} from "./app-routing.module";
import {UsersService} from "./users/users.service";
import {Http, HttpModule} from "@angular/http";



const routes = [
  {path:'',component: WallPageComponent},
  {path:'friend-page',component: FriendPageComponent},
  {path:'group-page', component: GroupPageComponent},
  {path:'wall-page', component: WallPageComponent},
  {path:'setting-page', component: SettingPageComponent},
  {path:'login-page', component: LoginPageComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PersonalInformationComponent,
    FriendsGroupsComponent,
    FooterComponent,
    HomePageComponent,
    FriendPageComponent,
    GroupPageComponent,
    WallPageComponent,
    SettingPageComponent,
    LoginPageComponent,
    MenuComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    AuthModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
