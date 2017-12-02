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
import {UsersService} from "./services/users.service";
import {MessagesService} from "./services/messages.service";
import {Http, HttpModule} from "@angular/http";
import {AuthService} from "./auth/auth.sevice";
import { PeoplePageComponent } from './people-page/people-page.component';
import { PeopleRowComponent } from './people-row/people-row.component';
import { MessagePageComponent } from './message-page/message-page.component';
import { MessageRowComponent } from './message-row/message-row.component';
import { ChatPageComponent } from './chat-page/chat-page.component';
import {DatePickerComponent} from "ngx-bootstrap";
import { UsersPageComponent } from './users-page/users-page.component';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';






const routes = [
  {path:'',component: WallPageComponent},
  {path:'friend-page',component: FriendPageComponent},
  {path:'group-page', component: GroupPageComponent},
  {path:'wall-page', component: WallPageComponent},
  {path:'setting-page', component: SettingPageComponent},
  {path:'login-page', component: LoginPageComponent},
  {path:'people-page', component: PeoplePageComponent},
  {path:'message-page', component: MessagePageComponent},
  {path:'chat-page', component: ChatPageComponent},
  {path:'users-page', component: UsersPageComponent}
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
    PeoplePageComponent,
    PeopleRowComponent,
    MessagePageComponent,
    MessageRowComponent,
    ChatPageComponent,
    UsersPageComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    AuthModule,
    AppRoutingModule,
    HttpModule
    // BrowserAnimationsModule


  ],
  providers: [UsersService, AuthService, MessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
