
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { CommonModule } from '@angular/common';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/homePage.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchBoxComponent } from './components/searchBox/searchBox.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoadingSpinnerComponent } from './components/loadingSpinner/loadingSpinner.component';


@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [HomePageComponent, AboutPageComponent, SidebarComponent, ContactPageComponent, SearchBoxComponent, LoadingSpinnerComponent],
  declarations: [HomePageComponent, AboutPageComponent, SidebarComponent, ContactPageComponent, SearchBoxComponent, LoadingSpinnerComponent],
  providers: [],
})
export class SharedModule { }
