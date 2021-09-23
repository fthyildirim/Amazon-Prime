import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BackgroundComponent } from './background/background.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselComponent } from './carousel/carousel.component';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import {
  ButtonsModule,
  CarouselModule,
  IconsModule,
} from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'primeng/accordion';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import {
  IgxCarouselModule,
  IgxIconModule,
  IgxSelectModule,
  IgxButtonModule,
  IgxCardModule,
  IgxGridModule,
  IgxInputGroupModule,
  IgxListModule,
  IgxRippleModule,
} from 'igniteui-angular';
import { PostsComponent } from './posts/posts.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MoviesComponent } from './movies/movies.component';
import { ChildComponent } from './child/child.component';
import { SeriesComponent } from './series/series.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginExitComponent } from './login-exit/login-exit.component';
import { AdminModule } from './admin/admin.module';
import { AuthGuard } from './admin/auth-guard-service';
import { CarouselModule as CarouselModule2 } from 'ngx-owl-carousel-o';
import { FooterComponent } from './footer/footer.component';

import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BackgroundComponent,
    LoginComponent,
    CarouselComponent,
    PostsComponent,
    HomepageComponent,
    MoviesComponent,
    ChildComponent,
    SeriesComponent,
    NotfoundComponent,
    LoginExitComponent,
    FooterComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AccordionModule,
    IconsModule,
    ButtonsModule,
    InputTextModule,
    ToastModule,
    CommonModule,
    ButtonModule,
    CarouselModule,
    HttpClientModule,
    IvyCarouselModule,
    IgxCarouselModule,
    IgxIconModule,
    HammerModule,
    IgxSelectModule,
    IgxButtonModule,
    IgxCardModule,
    IgxGridModule,
    IgxInputGroupModule,
    IgxListModule,
    AdminModule,
    AppRoutingModule,
    CarouselModule2,
    IgxRippleModule,
    NgxSpinnerModule
    
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
