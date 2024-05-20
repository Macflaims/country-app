import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  constructor(private http: HttpClient) { }

  private apiUrl: string = "https://restcountries.com/v3.1"

  searchCapital(term: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/capital/${term}`)
      .pipe(
        catchError(() => of([]))
      )
  }

  searchCountry(term: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/name/${term}`)
      .pipe(
        catchError(() => of([]))
      )
  }

  searchRegion(term: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/region/${term}`)
      .pipe(
        catchError(() => of([]))
      )
  }

}
