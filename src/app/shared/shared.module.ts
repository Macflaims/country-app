import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './pages/home-page/homePage.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';



@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [HomePageComponent, AboutPageComponent, SidebarComponent, ContactPageComponent],
  declarations: [HomePageComponent, AboutPageComponent, SidebarComponent, ContactPageComponent],
  providers: [],
})
export class SharedModule { }
