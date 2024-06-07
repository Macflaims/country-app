
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchBoxComponent } from './components/searchBox/searchBox.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoadingSpinnerComponent } from './components/loadingSpinner/loadingSpinner.component';


@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [SidebarComponent, SearchBoxComponent, LoadingSpinnerComponent],
  declarations: [SidebarComponent, SearchBoxComponent, LoadingSpinnerComponent],
  providers: [],
})
export class SharedModule { }
