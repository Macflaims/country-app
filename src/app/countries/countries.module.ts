import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryTableComponent } from './components/countryTable/countryTable.component';

import { CountriesRoutingModule } from './countries-routing.module';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  imports: [CommonModule, CountriesRoutingModule, SharedModule],
  exports: [],
  declarations: [
    ByCapitalPageComponent,
    ByCountryPageComponent,
    ByRegionPageComponent,
    CountryTableComponent

  ],
  providers: [],
})
export class CountriesModule { }
